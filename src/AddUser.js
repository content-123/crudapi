import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddUser = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    addUser({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Add User</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleAddUser}>Add User</button>
      <Link to="/">Back to User List</Link>
    </div>
  );
};

export default AddUser;
