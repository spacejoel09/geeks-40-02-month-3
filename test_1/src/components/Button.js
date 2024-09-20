import React from 'react';
import './Button.css';

const Button = ({ onClick, label }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
