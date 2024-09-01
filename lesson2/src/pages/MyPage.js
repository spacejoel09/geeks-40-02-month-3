
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import Modal from '../components/modal/Modal';
import { logDOM } from '@testing-library/react';
import Input from '../components/input/Input';
import classes from './MainPage.module.css';
import User from '../components/user/User';
import List from '../components/List/List';


const MainPage = () => {

    const [ show, setShow ] = useState(false);
    const [ show2, setShow2 ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    console.log(show);
    console.log(inputValue, 'inputValue');

    const tasks = [
        { id: 1, title: 'coding', completed: false },
        { id: 2, title: 'eat', completed: false },
        { id: 3, title: 'sleep', completed: false },
    ];


    const handleShow = () => {
        setShow(prevState => !prevState);
    };
    const handleShow2 = () => {
        setShow2(prevState => !prevState);
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <h1>{inputValue}</h1>
            {
                show && <Modal handleShow={handleShow}>
                    <Input placeholder={'Введите текст'} onChange={handleChange} value={inputValue}/>
                </Modal>
            }
            {
                show2 && <Modal handleShow={handleShow2}>
                    <User name={'Bakyt'} age={18} email={'baktybeks@mail.ru'}/>
                </Modal>
            }
            <button onClick={handleShow}>Открыть</button>
            <button onClick={handleShow2}>Открыть2</button>

            <List tasks={tasks} />



        </>
    );
};

export default MainPage;
