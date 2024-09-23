import React from 'react';
import classes from './Modal.module.css';
import Input from '../input/Input';
import Button from '../Button/Button';


const PokemonModal = ({handleShow, children, handleAdd, handleChange, inputValue}) => {
    return (
        <div>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <Button name={'Закрыть'} color={'primary'} action={handleShow}  />
                <Input placeholder={'Введите текст'} onChange={handleChange} value={inputValue}/>
                <Button name={'Добавить'} color={'default'} action={handleAdd}  />
                ----------------------
                {children}
                ----------------------
            </div>
        </div>
    );
};

export default PokemonModal;