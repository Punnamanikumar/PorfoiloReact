import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const ChatMessage = ({ role, text, streaming }) => {
    const isBot = role === 'bot';

    const renderContent = () => {
        if (isBot) {
            // Strip out the forced OpenRouter free tier footer aggressively
            let cleanText = text || '';
            // Sometimes it has a globe emoji or markdown link, just split it off
            cleanText = cleanText.split('Source: OpenRouter')[0];
            cleanText = cleanText.split('🌐 Source:')[0];
            cleanText = cleanText.split('<br><small')[0];

            // Remove trailing asterisks or globes
            cleanText = cleanText.replace(/(\*|🌐|\n)*$/gi, '');
            // Trim trailing whitespace and newlines
            cleanText = cleanText.trim();

            // Override generic LLM confused responses
            if (cleanText.toLowerCase().includes("i'm not sure what you meant by") ||
                cleanText.toLowerCase().includes("i didn't quite understand")) {
                cleanText = "I didn't quite understand that.\n\nYou can ask me about:\n• projects\n• backend systems\n• AI integrations\n• experience";
            }

            const rawMarkup = marked.parse(cleanText);
            const cleanMarkup = DOMPurify.sanitize(rawMarkup);
            return <div className="markdown-body" dangerouslySetInnerHTML={{ __html: cleanMarkup }} />;
        }
        return <div>{text}</div>;
    };

    if (isBot && streaming && !text) {
        return (
            <div className="chat-message-wrapper bot-message typing-container">
                {isBot && <div className="msg-avatar">🤖</div>}
                <div className="chat-bubble">
                    <div className="mk-typing">
                        <div className="mk-dots"><span></span><span></span><span></span></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`chat-message-wrapper ${isBot ? 'bot-message' : 'user-message'}`}>
            {isBot && <div className="msg-avatar">🤖</div>}
            <div className="chat-bubble">
                {renderContent()}
            </div>
        </div>
    );
};

export default ChatMessage;