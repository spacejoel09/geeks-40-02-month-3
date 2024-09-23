import React, { useState, useEffect, useRef } from 'react';
import classes from './TodoPage.module.css';
import trashban from "../source/DeleteOutlined.svg";
import pencil from "../source/Vector.svg";
// ESHKERE
const TodoPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');
    const editInputRef = useRef(null);

    const handleAdd = () => {
        if (inputValue.trim() === '') return;

        setTodoList(prevList => [
            ...prevList,
            { id: Date.now(), title: inputValue }
        ]);
        setInputValue('');
    };

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    const handleEdit = (todo) => {
        setEditId(todo.id);
        setEditValue(todo.title);
    };

    const handleClearAll = () => {
        setTodoList([]);
    };

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('tasks')) || [];
        setTodoList(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todoList));
    }, [todoList]);

    useEffect(() => {
        if (editId !== null && editInputRef.current) {
            editInputRef.current.focus();
        }
    }, [editId]);

    const handleSaveEdit = () => {
        setTodoList(prevList =>
            prevList.map(todo =>
                todo.id === editId ? { ...todo, title: editValue } : todo
            )
        );
        setEditId(null);
        setEditValue('');
    };

    return (
        <div>
            <h1>TO DO</h1>
            <div className={classes.context}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a task"
                />
                <button onClick={handleAdd}   disabled={inputValue.trim() === ''}
                >

                    Add task
                </button>
                {todoList.length > 0 && (
                    <button onClick={handleClearAll}>
                        Clear all
                    </button>
                )}
            </div>

            <ul className="todo-list">
                {todoList.map((todo) => (
                    <li key={todo.id} className={classes.todoItem}>
                        {editId === todo.id ? (
                            <>
                                <input
                                    ref={editInputRef}
                                    type="text"
                                    value={editValue}
                                    onChange={(e) => setEditValue(e.target.value)}
                                />
                                <button className="save" onClick={handleSaveEdit}>
                                    Save
                                </button>
                                <button className="cancel" onClick={() => setEditId(null)}>
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <input
                                    className={classes.inputdis}
                                    type="text"
                                    value={todo.title}
                                    disabled
                                />
                                <button
                                    style={{ width: '50px', padding: '5px' ,   margin:' 0 15px 0 100px' , height: '38px' }}
                                    className={classes.edit}
                                    onClick={() => handleEdit(todo)}
                                >
                                    <img src={pencil} alt="small-pen" />
                                </button>
                                <button
                                    style={{ width: '50px', padding: '5px', height: '38px' }}
                                    className={classes.delete}
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    <img src={trashban} alt="trash-ban" />
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoPage;
