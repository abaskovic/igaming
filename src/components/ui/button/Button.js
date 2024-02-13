import React from 'react';
import './Button.css';

const Button = ({ text, onClick, href, ariaLabel }) => {
    if (href) {
        return (
            <a href={href} className="button" aria-label={ariaLabel}>
                <span>{text}</span>
            </a>
        );
    }

    return (
        <button onClick={onClick} className="button" aria-label={ariaLabel}>
            <span>{text}</span>
        </button>
    );
};

export default Button;


