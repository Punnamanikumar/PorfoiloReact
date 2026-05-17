import { useState, useRef, useCallback } from 'react';
import { streamChat } from '../services/chatService';

const MAX_TURNS = 10;

export const useChat = () => {
    const [messages, setMessages] = useState([]);
    const [sessionId, setSessionId] = useState(null);
    const [turns, setTurns] = useState(0);
    const [isWaiting, setIsWaiting] = useState(false);
    const limitReached = turns >= MAX_TURNS;

    const messagesRef = useRef(messages);
    messagesRef.current = messages;

    const resetSession = useCallback(() => {
        setMessages([]);
        setSessionId(null);
        setTurns(0);
        setIsWaiting(false);
    }, []);

    const sendMessage = useCallback((text) => {
        if (limitReached || isWaiting || !text.trim()) return;

        const userMsg = { id: Date.now(), role: 'user', text, streaming: false };
        const botMsgId = Date.now() + 1;
        const botMsgPlaceholder = { id: botMsgId, role: 'bot', text: '', streaming: true };

        setMessages([...messagesRef.current, userMsg, botMsgPlaceholder]);
        setIsWaiting(true);

        let currentBotText = '';

        const handleChunk = (data) => {
            // Assuming data from backend has { chunk: "word", session_id: "uuid" }
            if (data.session_id && !sessionId) {
                setSessionId(data.session_id);
            }
            if (data.chunk) {
                currentBotText += data.chunk;
                setMessages((prev) =>
                    prev.map((msg) =>
                        msg.id === botMsgId ? { ...msg, text: currentBotText } : msg
                    )
                );
            }
        };

        const handleDone = () => {
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === botMsgId ? { ...msg, streaming: false } : msg
                )
            );
            setTurns((prev) => prev + 1);
            setIsWaiting(false);
        };

        const handleError = (error) => {
            console.error("Chat streaming error:", error);
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === botMsgId ? { ...msg, text: 'I didn\'t quite understand that.\nYou can ask me about:\n• projects\n• backend systems\n• AI integrations\n• experience', streaming: false } : msg
                )
            );
            setIsWaiting(false);
        };

        streamChat(text, sessionId, handleChunk, handleDone, handleError);
    }, [sessionId, limitReached, isWaiting]);

    const sendChip = useCallback((text) => {
        sendMessage(text);
    }, [sendMessage]);

    return {
        messages,
        sessionId,
        turns,
        isWaiting,
        limitReached,
        sendMessage,
        sendChip,
        resetSession,
        MAX_TURNS
    };
};
