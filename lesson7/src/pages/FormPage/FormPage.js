import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import classes from './FormPage.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import {postAxios} from "../studentsPage/StudentsPage";

const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const schema = Yup.object().shape({
    name: Yup.string()
        .required('Обязательное поле')
        .min(2, 'Имя должно содержать минимум 2 символа'),
    password: Yup.string()
        .required('Обязательное поле')
        .min(5, 'Пароль должен содержать минимум 5 символов'),
    repeat: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Обязательное поле'),
    email: Yup.string()
        .email('Неверный формат email')
        .matches(regex, 'Только @gmail.com разрешено')
        .required('Обязательное поле'),
});

const FormPage = () => {
    const BASE_URL = 'http://localhost:5000/student';
    const [ user,SetUser ] = useState([]);

    export const postAxios = async  (data, API)=> {
        try{
            const response = await axios.post(`${BASE_URL}`, data);
            await getAPI("user").then(data=> response.data)
        }catch(error){
            console.log(error);
        }
        // const ans = response
        // console.log(ans.data)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm({
        resolver: yupResolver(schema)
    });

    const submit = (data) => {
        console.log('Успешно:', data);
        postAxios("user", data)
    };

    const error = (data) => {
        console.log('Ошибки:', data);
    };

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit(submit, error)}>
                <h2 className={classes.title}>Register with</h2>

                <div className="child">
                    <label htmlFor="name" className={classes.label}>Name</label>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <input {...field} type="text" placeholder="Your full name" className={classes.input} />
                        )}
                    />
                    {errors.name && <p className={classes.error}>{errors.name.message}</p>}
                </div>

                <div className="child">
                    <label htmlFor="email" className={classes.label}>Email</label>
                    <input
                        id="email"
                        type="text"
                        placeholder="Your email"
                        {...register('email')}
                        className={classes.input}
                    />
                    {errors.email && <p className={classes.error}>{errors.email.message}</p>}
                </div>

                <div className="child">
                    <label htmlFor="password" className={classes.label}>Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Your password"
                        {...register('password')}
                        className={classes.input}
                    />
                    {errors.password && <p className={classes.error}>{errors.password.message}</p>}
                </div>
                <div className="child">
                    <label htmlFor="repeat" className={classes.label}>Re-Enter Password</label>
                    <input
                        id="repeat"
                        type="password"
                        placeholder="Re-enter password"
                        {...register('repeat')}
                        className={classes.input}
                    />
                    {errors.repeat && <p className={classes.error}>{errors.repeat.message}</p>}
                </div>

                <button className={classes.btn} type="submit">Submit</button>
            </form>
            {
                users && users.map(user=> <div>
                <p>user:{user.id}</p>
                </div>)
            }
        </div>
    );
};

export default FormPage;