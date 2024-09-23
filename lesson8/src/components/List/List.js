import React from 'react';

const List = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    {task.title} - {task.completed ? 'Completed' : 'Not Completed'}
                </li>
            ))}
        </ul>
    );
};

export default List;
