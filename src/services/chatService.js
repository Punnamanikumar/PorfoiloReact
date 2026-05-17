import CryptoJS from 'crypto-js';

const API_BASE = process.env.REACT_APP_API_URL;
// Ensure this key stays in sync with the backend.
const ENCRYPTION_KEY_B64 = process.env.REACT_APP_CHAT_ENC_KEY;

// Convert base64 key to CryptoJS WordArray
const getKey = () => CryptoJS.enc.Base64.parse(ENCRYPTION_KEY_B64);

export const encryptPayload = (data) => {
    const jsonString = JSON.stringify(data);
    const iv = CryptoJS.lib.WordArray.random(16);
    const key = getKey();

    const encrypted = CryptoJS.AES.encrypt(jsonString, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

    // Combine IV and Ciphertext (like backend expects: IV + Ciphertext)
    // According to plan: "AES-256-CBC encrypted (IV prepended, Base64 encoded)"
    // Let's create a single base64 string of IV (16 bytes) + ciphertext
    // Concat words:
    const combined = iv.clone().concat(encrypted.ciphertext);
    return CryptoJS.enc.Base64.stringify(combined);
};

export const decryptChunk = (base64Str) => {
    if (!base64Str) return '';
    try {
        const key = getKey();
        // Decode base64 to WordArray
        const combined = CryptoJS.enc.Base64.parse(base64Str);

        // Extract IV (first 16 bytes = 4 words)
        const iv = CryptoJS.lib.WordArray.create(combined.words.slice(0, 4), 16);

        // Extract Ciphertext
        const ciphertext = CryptoJS.lib.WordArray.create(
            combined.words.slice(4),
            combined.sigBytes - 16
        );

        // Create a cipher params object
        const cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: ciphertext
        });

        const decrypted = CryptoJS.AES.decrypt(cipherParams, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Decryption error", error);
        return "";
    }
};

export const streamChat = async (message, sessionId, onChunk, onDone, onError) => {
    try {
        const payload = { message };
        if (sessionId) {
            payload.session_id = sessionId;
        }

        const encryptedData = encryptPayload(payload);

        const response = await fetch(`${API_BASE}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ request: encryptedData })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let done = false;
        let buffer = '';

        while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;
            if (value) {
                buffer += decoder.decode(value, { stream: true });
                // Server Sent Events (SSE) stream format handling
                const lines = buffer.split('\n');
                // Keep the last partial line in the buffer
                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const dataStr = line.slice(6).trim();
                        if (dataStr === '[DONE]') {
                            onDone();
                            return;
                        }
                        if (dataStr) {
                            const decryptedJSON = decryptChunk(dataStr);
                            if (decryptedJSON) {
                                try {
                                    const parsed = JSON.parse(decryptedJSON);
                                    if (parsed.error) {
                                        onError(new Error(parsed.error));
                                        return;
                                    }
                                    onChunk(parsed);
                                } catch (e) {
                                    console.error("JSON parse error on chunk", e);
                                }
                            }
                        }
                    }
                }
            }
        }
        onDone();
    } catch (error) {
        onError(error);
    }
};
