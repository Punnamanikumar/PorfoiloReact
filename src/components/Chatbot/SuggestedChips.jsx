import React, { useMemo } from 'react';

const defaultPool = [
    "Tech Stack",
    "Recent Projects",
    "Contact Info",
    "Work Experience",
    "AI Integrations",
    "Backend Systems",
    "Scaling APIs",
    "Database Design",
    "Cloud Architecture",
    "Security & Auth"
];

const SuggestedChips = ({ onSelect, dynamicChips, title }) => {
    const randomChips = useMemo(() => {
        const shuffled = [...defaultPool].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }, []);

    const chips = dynamicChips || randomChips;

    return (
        <div className="suggested-chips-container">
            {title && <div className="suggested-chips-title">{title}</div>}
            <div className="suggested-chips">
                {chips.map((chip, idx) => (
                    <button
                        key={idx}
                        className="chip-btn"
                        onClick={() => onSelect(chip)}
                    >
                        {chip}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SuggestedChips;