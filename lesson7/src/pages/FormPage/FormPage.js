
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import classes from './FormPage.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';


const regex = /^\d+$/;
const regExEmail = new RegExp(/^[a-zA-Z\d-_\.]+@[a-zA-Z\d-_]+\.[a-zA-Z-_]{2,8}$/)

const schema = Yup.object().shape({
    name: Yup.string().required('обязательное поле').min(2, 'Необходимо 2'),
    email: Yup.string().required('обязательное поле').matches(regExEmail, 'не правильная почта'),
    password: Yup.string().required('обязательное поле').matches(regex, 'только цифры').min(2, 'Необходимо 2'),
    password2: Yup.string().oneOf([Yup.ref('password'), null, 'пароли должны совпадать'])});
const FormPageDz = () => {
    const [ users, setUsers ] = useState([]);
    const BASE_URL = 'http://localhost:5000';
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
        clearErrors,
        setValue,
        reset, control
    } = useForm({
        defaultValues: {
            age: 18,
            name: 'Kuban'
        },
        resolver: yupResolver(schema)
    });
    const getAPI = async(API) => {
        const response = await fetch(`${BASE_URL}/${API}/`);
        const data = await response.json();
        console.log(response);
        console.log(data);
        return data;
    };
    const postAPIAxios = async(API, data) => {
        try {
            const response = await axios.post(`${BASE_URL}/${API}/`,
                data
            );
            await getAPI('users').then(data => setUsers(data));
            console.log(response.data, 'axios');
        } catch(e) {
            console.log(e.message)
            alert(e.message);
        }
    };
    const submit = (data) => {
        console.log(data);
        postAPIAxios('users', data)
    };

    const error = (data) => {
        console.log(data);
    };

    const name = watch('name');

    console.log(errors);
    return (
        <div>
            {
                <h1>{name}</h1>
            }
            <form className={classes.form} onSubmit={handleSubmit(submit, error)}>
                <input
                    type="text"
                    placeholder="НАапишите имя"
                    aria-invalid={errors.name ? true : false}
                    {
                        ...register('name')
                    }
                />
                {
                    errors?.name?.message && <p>{errors.name.message}</p>
                }
                <input type="text" placeholder="Напишите email"
                       {
                           ...register('email')
                       }
                       aria-invalid={errors.email ? true : false}
                />
                {
                    errors?.email?.message && <p>{errors.email.message}</p>
                }
                <input type="text" placeholder="Напишите пароль"
                       {
                           ...register('password')
                       }
                       aria-invalid={errors.password ? true : false}
                />
                {
                    errors?.password?.message && <p>{errors.password.message}</p>
                }
                <input type="text" placeholder="Повторите пароль"
                       {
                           ...register('password2')
                       }
                       aria-invalid={errors.password2 ? true : false}
                />
                {
                    errors?.password2?.message && <p>{errors.password2.message}</p>
                }
                <button type="submit">Отправить</button>
            </form>
            {
                users && users.map(user=> <div>
                    <p>user: {user.name}</p>
                </div>)
            }
        </div>
    );
};

export default FormPageDz;
