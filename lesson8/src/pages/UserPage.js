import { useState, useEffect } from "react";

const BASEURL = "https://jsonplaceholder.typicode.com/";

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('all'); 
    const getAPI = async (API) => {
        const response = await fetch(`${BASEURL}/${API}`);
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        getAPI("users").then(res => setUsers(res));
    }, []);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredUsers = users.filter(user => {
        if (filter === 'all') return true;
        if (filter === 'completed') return user.completed;
        if (filter === 'not_completed') return !user.completed;
        return false;
    });

    return (
        <div>
            <select onChange={handleFilterChange} value={filter}>
                <option value="all">Все пользователи</option>
                <option value="completed">Выполненные</option>
                <option value="not_completed">Не выполненные</option>
            </select>

            <div>
                {filteredUsers.map(user => (
                    <div key={user.id}>
                        <p>name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>phone: {user.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPage;
