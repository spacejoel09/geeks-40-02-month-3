
import React, { useEffect, useState } from 'react';
import { logDOM } from '@testing-library/react';
import axios from 'axios';
const BASE_URL = 'http://localhost:5000/student';

export const postAxios = async  (data, API)=> {
    const response = await axios.post(`${BASE_URL}`, data)
    const ans = response
    console.log(ans.data)
}
const Fetch = () => {
    const [ loading, setLoading ] = useState(true);
    const [ data, setData ] = useState([]);

    const GetAPI = async() => {
        setLoading(true);
        try {
            const response = await fetch(`${BASE_URL}`);
            const data = await response.json();
            return data;
        } catch(e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };
    const getAxios = async() => {
        setLoading(true);
        try {
            const response = await axios(`${BASE_URL}`);
            console.log(response.data);
            return response.data;
        } catch(e) {
            console.log(e.message);
            alert(e.message)
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        GetAPI().then(data => setData(data));
        getAxios();
    }, []);


    const postApi = async () => {
        await fetch(`${BASE_URL}`,{
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    surname: "Sariev",
                    name: "Bakyt",
                    id: data.length>0 ? String(Number(data[data.length-1].id)+1) : '1',
                    groupId: 2,
                }
            )
        })
            .then(response=>response.json())
            .then(data=> console.log(data))
            .catch(error=> console.log(error))
        await GetAPI().then(data=>setData(data))
    }


    const putAxios = async (id)=>{
        await axios.put(`${BASE_URL}/${id}`, {
            surname: "Sariev2",
            name: "Bakyt",
            groupId: 2,
        })
        await GetAPI().then(data=>setData(data))
    }
    const patchAxios = async (id)=>{
        await axios.patch(`${BASE_URL}/${id}`, {
            name: "TIMUR222"
        })
        await GetAPI("student").then(data=>setData(data))
    }
    const deleteAxios = async (id)=>{
        const response = await axios.delete(`${BASE_URL}/${id}`)
        await GetAPI().then(data=>setData(data))
    }

    const handleDelete = (id) => {
        deleteAxios(id)
        alert(`Пользователь под номером ${id} удален`)
    }
    return (
        <div>
            {data.map(item => <div>
                <p>id: {item.id} name: {item.name} surname: {item.surname} <button onClick={

                    ()=>handleDelete(item.id)
                }>
                    удалить
                </button>
                <button onClick={patchAxios}>
                    PATCH
                </button></p>
            </div>)}
            <button onClick={()=>postApi()}>POSTAPI</button>
            <button onClick={()=>postAxios()}>postAxios</button>
            <button onClick={()=>putAxios(6)}>putAxios5</button>

        </div>
    );
};

export default Fetch;
