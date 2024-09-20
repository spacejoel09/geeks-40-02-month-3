import React from 'react';
import './Input.css';

const Input = ({ value, placeholder, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;
