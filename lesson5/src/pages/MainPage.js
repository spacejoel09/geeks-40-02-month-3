import React, { useState } from 'react';
import UserPage from './UserPage';
import TodoPage from './TodoPage';


const MainPage = () => {

    const [ show2, setShow2 ] = useState(false);

    const handleShow2 = () => {
        setShow2(prevState => !prevState);
    };

    return (
        <>
            <TodoPage/>
        </>
    );
};

export default MainPage;