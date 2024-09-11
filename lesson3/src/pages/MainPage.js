import React, { useState } from 'react';
import Modal from '../components/modal/Modal';
import Button from '../components/Button/Button';
import TodoList from '../components/todoList/TodoList';

const MainPage = () => {
    const [show, setShow] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([
        { id: 1, title: 'coding', completed: false },
        { id: 2, title: 'eat', completed: false },
        { id: 3, title: 'sleep', completed: false }
    ]);

    const handleShow = () => {
        setShow(prevState => !prevState);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        setTodoList(prev => [
            ...prev,
            {
                id: todoList.length + 1,
                title: inputValue,
                completed: false
            }
        ]);
        setInputValue(''); // Очистить поле ввода после добавления
    };

    const handleDone = (id) => {
        setTodoList(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleDelete = (id) => {
        setTodoList(prevTodoList => prevTodoList.filter(todo => todo.id !== id));
    };

    return (
        <>
            {
                show &&
                <Modal
                    handleShow={handleShow}
                    handleAdd={handleAdd}
                    handleChange={handleChange}
                    inputValue={inputValue}
                />
            }

            <Button name={'Открыть'} color={'primary'} action={handleShow} />
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
            />
        </>
    );
};

export default MainPage;
