
import React from 'react';
import classes from './Modal.module.css';


const Modal = ({handleShow, children}) => {
    console.log(handleShow);
    return (
        <div>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <button onClick={handleShow}>Закрыть</button>
                ----------------------
                {children}
                ----------------------
            </div>
        </div>
    );
};

export default Modal;
