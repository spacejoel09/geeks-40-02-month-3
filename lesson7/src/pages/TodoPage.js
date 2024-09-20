
import React, { useEffect, useState } from 'react';
import Modal from '../components/modal/Modal';
import Button from '../components/Button/Button';
import TodoList from '../components/todoList/TodoList';


const TodoPage = () => {
    const [ show, setShow ] = useState(false);
    const [ inputValue, setInputValue ] = useState('');
    const [ todoList, setTodoList ] = useState([]);
    const [ filterOption, setFilterOption ] = useState(["all"]);

    const handleShow = () => {
        setShow(prevState => !prevState);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAdd = () => {
        setTodoList(prev => [ ...prev,
            {
                id: todoList.length === 0 ? 1 : todoList[ todoList.length - 1 ].id + 1,
                title: inputValue,
                completed: false
            } ]);
    };

    const handleDone = (id) => {
        console.log(id);
        todoList.map(todo => {
            if (id === todo.id) {
                return todo.completed = !todo.completed;
            }
        });
        setTodoList([ ...todoList ]);
    };

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };
    const handleEdit = (currentTask) => {
        console.log(currentTask);
        todoList.map(todo=> {
            if(currentTask.id===todo.id) return todo.title = currentTask.title
        })
        setTodoList([ ...todoList ])
    };
    useEffect(() => {
        console.log('useEffect');
    }, [ todoList ]);

    // const setItem = () => {
    //     localStorage.setItem('name', JSON.stringify({
    //         id: 1,
    //         title: 'coding',
    //         completed: false
    //     }));
    // };
    // console.log(JSON.parse(localStorage.getItem('name')));

    // useEffect(() => {
    //     setItem();
    // }, []);
    //
    // useEffect(() => {
    //     const myLocalStorage = JSON.parse(localStorage.getItem('tasks'));
    //     if (myLocalStorage === null) {
    //         return localStorage.setItem('tasks', JSON.stringify(todoList));
    //     }
    //     if (myLocalStorage !== 0) {
    //         setTodoList(myLocalStorage);
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(todoList));
    // }, [ todoList ]);
    //
    // const handleClearAll = () => {
    //     console.log('Очистить');
    //     localStorage.removeItem('tasks');
    //     setTodoList([])
    // }

    const fetchTodo = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(json => setTodoList(json))
    }

    useEffect(() => {
        fetchTodo()
    }, []);

    const options = [
        {
            value: 'all', label: "Все таски",
        },
        {
            value: 'completed', label: "Выполнено",
        },

        {
            value: 'not_completed', label: "Не выполненые ",
        },

    ]


    const handleFilterChange =(event) => {
        setFilterOption(event.target.value)
    }

    const filterOptionTasks = todoList.filter(todo=>{
        switch (filterOption) {
            case 'completed': return todo.completed;
            case 'not_completed': return !todo.completed;
            default:return true
        }
    })

    console.log(filterOption)

    return (
        <div>
            <select onChange={handleFilterChange} value={filterOption}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <Button name={'Открыть'} color={'primary'} action={handleShow}/>
            {/*<Button name={'Очистить'} color={'error'} action={handleClearAll}/>*/}

            <TodoList
                todoList={filterOptionTasks}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
            {
                show &&
                <Modal
                    handleShow={handleShow}
                    handleAdd={handleAdd}
                    handleChange={handleChange}
                    inputValue={inputValue}
                >

                </Modal>
            }
        </div>
    );
};

export default TodoPage;
