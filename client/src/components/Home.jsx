import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
    const [users, setUsers] = useState([]);
    async function fetchUsers() {
        try {
            const { data } = await axios.get('http://127.0.0.1:3000/users');
            console.log(data);
            setUsers(users);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return users?.map((user) => {
        return (
            <li>
                {user.firstName} {user.lastName}
            </li>
        );
    });
}

export default Home;
