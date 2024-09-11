
import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Button from '../components/button/Button';
import TestComponent from '../components/TestComponent/Component';


const MainPage = () => {
    const ComponentProps = "SALAM!"
    return (
        <>
            <Header/>
            <h1>hello</h1>
            <Button name={'add'} color={'primary'}/>
            <Button name={'delete'} color={'default'}/>
            <Button name={'save'} color={'error'}/>
            <Footer/>
            <TestComponent  content = {ComponentProps}/>



        </>
    );
};

export default MainPage;
