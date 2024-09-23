import react from 'react';
import classes  from './pagination.module.css';
import StudentsPage from "../../pages/studentsPage/StudentsPage";


const pagination = ({page,next,prev}) => {

    return(
        <div className={classes.pagination}>
            <button onClick={prev}>prev</button>
            <div>{page}</div>
            <button onClick={next}>next</button>
        </div>
    )
}


export default StudentsPage;