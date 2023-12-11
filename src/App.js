import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import UserList from './UserList';
import AddUser from './AddUser';
import EditUser from './EditUser';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://6567642e64fcff8d73104d72.mockapi.io/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
    }
  };

  const addUser = async (user) => {
    try {
      await axios.post('https://6567642e64fcff8d73104d72.mockapi.io/users', user);
      fetchUsers();
    } catch (error) {
      console.error('Error adding user', error);
    }
  };

  const editUser = async (id, updatedUser) => {
    try {
      await axios.put(`https://6567642e64fcff8d73104d72.mockapi.io/users/${id}`, updatedUser);
      fetchUsers();
    } catch (error) {
      console.error('Error editing user', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://6567642e64fcff8d73104d72.mockapi.io/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user', error);
    }
  };

  return (
    
      <div className="App">
        <h1>User Management</h1>
        <Routes>
          <Route path="/" element={<UserList users={users} editUser={editUser} deleteUser={deleteUser} />} />
          <Route path="/add" element={<AddUser addUser={addUser} />} />
          <Route path="/edit/:id" element={<EditUser users={users} editUser={editUser} />} />
        </Routes>
      </div>
    
  );
};

export default App;
