import React, { useState } from 'react';
import UserPage from './UserPage';
import TodoPage from './TodoPage';
import FormPage from './FormPage/FormPage';
import StudentPage from './studentsPage/StudentsPage';


const MainPage = () => {

    const [ show2, setShow2 ] = useState(false);

    const handleShow2 = () => {
        setShow2(prevState => !prevState);
    };

    return (
        <>
            <FormPage/>
        </>
    );
};

export default MainPage;