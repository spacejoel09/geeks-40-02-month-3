import React from 'react';
import {useForm} from "react-hook-form"
import * as Yup from 'yup'


const FormPage =() => {
    const {register, handleSubmit, watch
    ,formState:{errors,isValid},
    clearErrors,
    reset} = useForm({
        defaultValue: {

        },
    })


    const name = watch("name")

    const submit = (data) => {
        console.log(submit)
    }
    const error = (data) => {
        console.log(error)
    }

    return(
        <div>
            {/*{*/}
            {/*    <h1{name}></h1>*/}
            {/*}*/}
            <form onSubmit={handleSubmit(submit, error)}>

                <input type="text" placeholder="First Name"
                                           {
                    ...register('name')
                                           }/>
               <input type="text" placeholder="Age"
                                           {
                                               ...register('age')
                                           }/>
                <button onClick={() => {
                    console.log()
                }}>Отправить имя </button>
            </form>
        </div>
    )
}

export  default FormPage