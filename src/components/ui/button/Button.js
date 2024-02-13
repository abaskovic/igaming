import React from 'react';
import './Button.css';

const Button = ({ text, onClick, href }) => {
    if (href) {
        return (
            <a href={href} className="button">
                <span>{text}</span>
            </a>
        );
    }

    return (
        <button onClick={onClick} className="button">
            <span>{text}</span>
        </button>
    );
};

export default Button;
