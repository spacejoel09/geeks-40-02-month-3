import React, {useEffect} from 'react';
import classes from './User.module.css';
import Button from "../Button/Button";


const BASEURL = "https://jsonplaceholder.typicode.com/"

const User = ({user}) => {

}
    const [users, setUsers ] = React.useState([]);

    const [user,setUser] = React.useState([]);



    return (
        <div className={classes.user}>
            <div className={classes.user_name}>{name}</div>
            <div className={classes.user_age}>{age}</div>
            <div className={classes.user_email}>{email}</div>
            <Button name={"Дополнительно"}
                    action={getApiUser(user.id)}
                color={'default'}/>

            {
                userDetails && userDetails.id === user.id && <div>
                <div className={classes.user_age>{userDetails.address.city}</div>
                <div className={classes.user_age>{userDetails.email}</div>
                <div className={classes.user_age>{userDetails.company.name}</div>
                <div>

            }

        </div>
    );
};

export default User;