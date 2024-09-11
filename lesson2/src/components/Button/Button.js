import React from 'react';
import classes from './button.module.css';

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick} className={classes.button}>
            {text}
        </button>
    );
};

export default Button;
