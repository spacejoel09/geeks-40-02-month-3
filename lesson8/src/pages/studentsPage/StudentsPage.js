import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { logDOM } from '@testing-library/react';


const StudentsPage = () => {
    const [ students, setStudents ] = useState([]);
    const BASE_URL = 'http://localhost:5000';
    const getAPI = async(API) => {
        const response = await fetch(`${BASE_URL}/${API}/`);
        const data = await response.json();
        console.log(response);
        console.log(data);
        return data;
    };
    const postAPI = async(API) => {
        const response = await fetch(`${BASE_URL}/${API}/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application-json'
            },
            body: JSON.stringify({
                surname: 'Sariev',
                name: 'Bakyt',
                id: students.length > 0 ? String(Number(students[ students.length - 1 ].id) + 1) : '1',
                groupId: 2
            })
        }).then(response => response.json()).then(data => console.log(data));
        await getAPI('student').then(data => setStudents(data));
    };

    const getAPIAxios = async(API) => {
        const response = await axios(`${BASE_URL}/${API}/`);
        console.log(response.data, 'axios');
    };
    const postAPIAxios = async(API) => {
        try {
            const response = await axios.post(`${BASE_URL}/${API}/`,
                {
                    surname: 'Sariev',
                    name: 'Bakyt',
                    id: students.length > 0 ? String(Number(students[ students.length - 1 ].id) + 1) : '1',
                    groupId: 2
                }
            );
            await getAPI('student').then(data => setStudents(data));
            console.log(response.data, 'axios');
        } catch(e) {
            console.log(e.message)
            alert(e.message);
        }
    };

    const putAxios = async (id) => {
        await axios.put(`http://localhost:5000/student/${id}`,{
            surname: "Sam",
            name: "Тимур",
            groupId: 2
        })
        await getAPI('student').then(data => setStudents(data));
    }

    const patchAxios = async (id) => {
        await axios.patch(`http://localhost:5000/student/${id}`,{
            name: "Тимур22222",
        })
        await getAPI('student').then(data => setStudents(data));
    }

    const deleteAxios = async (id) => {
        await axios.delete(`http://localhost:5000/student/${id}`)
        await getAPI('student').then(data => setStudents(data));
    }

    useEffect(() => {
        getAPI('student').then(data => setStudents(data));
        getAPIAxios('student');
    }, []);
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={() => postAPI('student')}>post</button>
            <button onClick={() => postAPIAxios('student')}>postAPIAxios</button>
            {
                students && students.map(student => <div>
                    <p>id: {student.id} name: {student.name}</p>
                    <button onClick={()=>putAxios(student.id)}>put</button>
                    <button onClick={()=>patchAxios(student.id)}>patch</button>
                    <button onClick={()=>deleteAxios(student.id)}>deleteAxios</button>
                </div>)
            }
        </div>
    );
};

export default StudentsPage;