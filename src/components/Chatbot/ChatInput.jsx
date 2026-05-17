import React, { useState, useRef, useEffect, useMemo } from 'react';

const ChatInput = ({ onSend, disabled }) => {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    const placeholderText = useMemo(() => {
        const options = [
            "Ask about projects...",
            "Ask about SSO...",
            "Ask about AI systems...",
            "Ask about AWS...",
            "Ask about backend scaling..."
        ];
        return options[Math.floor(Math.random() * options.length)];
    }, []);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
        }
    }, [text]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleSend = () => {
        if (text.trim() && !disabled) {
            onSend(text.trim());
            setText('');
            if (textareaRef.current) {
                textareaRef.current.style.height = 'auto';
            }
        }
    };

    return (
        <div className="chat-input-container">
            <div className="chat-input-wrapper">
                <textarea
                    ref={textareaRef}
                    className="chat-textarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholderText}
                    disabled={disabled}
                    rows={1}
                />
                <button
                    className="chat-send-btn"
                    onClick={handleSend}
                    disabled={disabled || !text.trim()}
                    title="Send message"
                >
                    <svg viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ChatInput;