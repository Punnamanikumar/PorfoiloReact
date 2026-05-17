import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import ChatWindow from './ChatWindow';

const tooltipOptions = [
    "Explore AI Projects 🤖",
    "Ask About SSO 🔐",
    "Backend Systems ⚡",
    "AWS Architecture ☁️",
    "Tech Stack 💻",
    "AI Integrations 🧠",
    "System Design 🚀",
    "API Scaling 📈"
];

const Chatbot = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipIndex, setTooltipIndex] = useState(0);
    const [tooltipText, setTooltipText] = useState("");
    const [tooltipClass, setTooltipClass] = useState('fade-in-tooltip');

    // Initial delay before showing tooltip
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    // Fade out, switch text, type new text
    useEffect(() => {
        if (!showTooltip) return;

        let charIndex = 0;
        let typingTimeout;
        let fadeTimeout;
        const currentOption = tooltipOptions[tooltipIndex];

        const typeLetter = () => {
            if (charIndex <= currentOption.length) {
                setTooltipText(currentOption.slice(0, charIndex));
                charIndex++;
                typingTimeout = setTimeout(typeLetter, 45); // Typing speed
            } else {
                // Done typing, wait before fading out
                fadeTimeout = setTimeout(() => {
                    setTooltipClass('fade-out-tooltip');
                    setTimeout(() => {
                        setTooltipIndex((prev) => (prev + 1) % tooltipOptions.length);
                        setTooltipClass('fade-in-tooltip');
                    }, 300); // Wait for fade out to complete
                }, 3000); // 3s pause reading time
            }
        };

        typeLetter();

        return () => {
            clearTimeout(typingTimeout);
            clearTimeout(fadeTimeout);
        };
    }, [showTooltip, tooltipIndex]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        if (!isOpen) setShowTooltip(false);
    };

    return (
        <div className="chatbot-root" data-dark={darkMode}>
            {!isOpen && (
                <div className="chat-launcher-container" onClick={toggleChat}>
                    {showTooltip && (
                        <div className={`chat-tooltip ${tooltipClass}`}>
                            {tooltipText}<span className="cursor-blink">|</span>
                        </div>
                    )}
                    <button className="chat-launcher-fab">
                        💬
                    </button>
                </div>
            )}

            {isOpen && (
                <ChatWindow onClose={toggleChat} />
            )}
        </div>
    );
};

export default Chatbot;
