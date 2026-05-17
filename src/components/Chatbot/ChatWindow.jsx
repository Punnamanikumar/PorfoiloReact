import React, { useEffect, useRef } from 'react';
import { useChat } from '../../hooks/useChat';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import SuggestedChips from './SuggestedChips';

const ChatWindow = ({ onClose }) => {
    const {
        messages,
        isWaiting,
        limitReached,
        sendMessage,
        sendChip
    } = useChat();

    const messagesEndRef = useRef(null);

    const scrollToBottom = (behavior = 'smooth') => {
        messagesEndRef.current?.scrollIntoView({ behavior });
    };

    useEffect(() => {
        if (messages.length > 0 || isWaiting) {
            const isStreaming = messages.length > 0 && messages[messages.length - 1].streaming;
            scrollToBottom(isStreaming ? 'auto' : 'smooth');
        }
    }, [messages, isWaiting]);

    useEffect(() => {
        // Prevent body scrolling when chat window is open on mobile
        if (window.innerWidth <= 480) {
            document.body.style.overflow = 'hidden';
            return () => {
                document.body.style.overflow = 'unset';
            };
        }
    }, []);

    const getDynamicChips = () => {
        if (messages.length === 0) return null;
        const lastMsg = messages[messages.length - 1];
        if (lastMsg.role !== 'bot' || lastMsg.streaming) return null;

        const lines = lastMsg.text.split('\n');
        const parsedChips = [];
        let parsing = false;

        for (const line of lines) {
            const cl = line.trim().toLowerCase();
            if (cl.includes('want me to dive into') || cl.includes('want me to explain') || cl.includes('should we explore')) {
                parsing = true;
                continue;
            }
            if (parsing && (line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*'))) {
                const text = line.trim().substring(1).trim();
                if (text.length > 0 && text.length < 45) parsedChips.push(text);
            } else if (parsing && line.trim() === '' && parsedChips.length > 0) {
                break; // Stop parsing if empty line after list
            }
        }

        if (parsedChips.length > 0) return parsedChips;

        return [
            "How did you scale APIs?",
            "Explain your SSO architecture",
            "What AI systems have you built?"
        ];
    };

    const dynamicChips = getDynamicChips();

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="chat-header-left">
                    <div className="chat-header-avatar">🤖</div>
                    <div className="chat-header-info">
                        <span className="chat-header-name">Ask Mani</span>
                        <span className="chat-header-status">
                            <span className="status-dot"></span> AI Backend Engineer • Online
                        </span>
                    </div>
                </div>
                <button className="chat-close-btn" onClick={onClose}>✕</button>
            </div>

            <div className="chat-messages">
                <div className="chat-message-wrapper bot-message">
                    <div className="msg-avatar">🤖</div>
                    <div className="chat-bubble">
                        Hi! I'm Mani 👋<br />Node.js backend engineer focused on scalable APIs and AI systems.
                    </div>
                </div>
                <div className="chat-message-wrapper bot-message" style={{ animationDelay: '0.2s' }}>
                    <div className="msg-avatar" style={{ visibility: 'hidden' }}>🤖</div>
                    <div className="chat-bubble">
                        I can help you explore:<br />
                        • Tech stack<br />
                        • Projects<br />
                        • Experience<br />
                        • Contact info
                    </div>
                </div>
                <div className="chat-message-wrapper bot-message" style={{ animationDelay: '0.4s' }}>
                    <div className="msg-avatar" style={{ visibility: 'hidden' }}>🤖</div>
                    <div className="chat-bubble">
                        What would you like to know?
                    </div>
                </div>

                {messages.map((msg) => (
                    <ChatMessage
                        key={msg.id}
                        role={msg.role}
                        text={msg.text}
                        streaming={msg.streaming}
                    />
                ))}

                {messages.length === 0 ? (
                    <SuggestedChips onSelect={sendChip} />
                ) : (
                    !isWaiting && dynamicChips && (
                        <SuggestedChips
                            onSelect={sendChip}
                            title="Try asking:"
                            dynamicChips={dynamicChips}
                        />
                    )
                )}

                <div ref={messagesEndRef} />
            </div>

            {limitReached && (
                <div className="limit-reached-msg">
                    Session limit reached. Please use the contact form to get in touch!
                </div>
            )}

            <ChatInput onSend={sendMessage} disabled={isWaiting || limitReached} />
        </div>
    );
};

export default ChatWindow;