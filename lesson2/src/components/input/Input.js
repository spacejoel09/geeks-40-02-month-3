import React from 'react';


const Input = ({type='text', onChange, placeholder, value}) => {
    return (
        <input type={type} onChange={onChange} placeholder={placeholder} value={value}/>
    );
};

export default Input;