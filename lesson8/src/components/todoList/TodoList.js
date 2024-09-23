
import React, { useState } from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.css';


const TodoList = ({todoList, handleDone, handleDelete,handleEdit}) => {
    const [currentEdit, setCurrentEdit] =useState("")
    return (
        <ul className={classes.ul}>
            {
                todoList.map(todo=><Todo
                    key={todo.id}
                    todo={todo}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                    setCurrentEdit={setCurrentEdit}
                    isEdit={currentEdit===todo.id}
                />)
            }
        </ul>
    );
};

export default TodoList;
