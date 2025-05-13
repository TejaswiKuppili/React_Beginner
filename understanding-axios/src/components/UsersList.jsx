import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/usersApi';
import axios from 'axios';
import AddUserForm from './AddUserForm';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers()
        .then((response) => {
            setUsers(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []);

    const handleUserAdded = (newUser) => {
        setUsers((prev) => [...prev, newUser]);
    };
    
    return (
    <div className="user-container">
      <h2>Users List</h2>
      <AddUserForm onUserAdded={handleUserAdded} />
      {error && <p className="status error">{error}</p>}
      {loading ? (
        <p className="status">Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;