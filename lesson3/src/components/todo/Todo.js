import React from 'react';
import classes from './Todo.module.css';
import Button from '../Button/Button';


const Todo = ({todo, handleDone, handleDelete}) => {
    return (
        <li className={classes.li}>
            <div className={classes.info}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
                <p>compl: {todo.completed ? 'true' : 'false'}</p>
            </div>
            <div className={classes.btns}>
                <Button name={"Edit"} color={'primary'}/>
                <Button name={"Done"} color={'default'} action={()=>handleDone(todo.id)}/>
                <Button name={"Delete"} color={'error'} action={()=>handleDelete(todo.id)}/>
            </div>
        </li>
    );
};

export default Todo;