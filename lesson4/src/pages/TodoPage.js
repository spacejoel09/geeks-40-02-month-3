
import React, { useEffect, useState } from 'react';
import Modal from '../components/modal/Modal';
import Button from '../components/Button/Button';
import TodoList from '../components/todoList/TodoList';


const TodoPage = () => {
    const [ show, setShow ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [ todoList, setTodoList ] = useState([]);
    const handleShow = () => {
        setShow(prevState => !prevState);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        setTodoList(prev => [ ...prev,
            {
                id: todoList.length === 0 ? 1 : todoList[ todoList.length - 1 ].id + 1,
                title: inputValue,
                completed: false
            } ]);
    };

    const handleDone = (id) => {
        console.log(id);
        todoList.map(todo => {
            if (id === todo.id) {
                return todo.completed = !todo.completed;
            }
        });
        setTodoList([ ...todoList ]);
    };

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };
    const handleEdit = (currentTask) => {
        console.log(currentTask);
        todoList.map(todo=> {
            if(currentTask.id===todo.id) return todo.title = currentTask.title
        })
        setTodoList([ ...todoList ])
    };
    useEffect(() => {
        console.log('useEffect');
    }, [ todoList ]);

    const setItem = () => {
        localStorage.setItem('name', JSON.stringify({
            id: 1,
            title: 'coding',
            completed: false
        }));
    };
    console.log(JSON.parse(localStorage.getItem('name')));

    useEffect(() => {
        setItem();
    }, []);

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
        if (myLocalStorage === null) {
            return localStorage.setItem('tasks', JSON.stringify(todoList));
        }
        if (myLocalStorage !== 0) {
            setTodoList(myLocalStorage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todoList));
    }, [ todoList ]);


    const clearAll = () =>{
        localStorage.removeItem("tasks")
        setTodoList([])
    }

    return (
        <div>
            <Button name={'Открыть'} color={'primary'} action={handleShow}/>
            <Button name={'Очистить'} color={'error'} action={clearAll}/>
            <TodoList
                todoList={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            {
                show &&
                <Modal
                    handleShow={handleShow}
                    handleAdd={handleAdd}
                    handleChange={handleChange}
                    inputValue={inputValue}
                >

                </Modal>
            }
        </div>
    );
};

export default TodoPage;
