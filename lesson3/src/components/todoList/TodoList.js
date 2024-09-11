
import React from 'react';
import Todo from '../todo/Todo.js';
import classes from './TodoList.module.css';


const TodoList = ({todoList, handleDone, handleDelete}) => {
    return (
        <ul className={classes.ul}>
            {
                todoList.map(todo=><Todo
                    key={todo.id}
                    todo={todo}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                />)
            }
        </ul>
    );
};

export default TodoList;
