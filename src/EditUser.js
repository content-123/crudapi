import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const EditUser = ({ users, editUser }) => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = users.find((user) => user.id === id);
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [id, users]);

  const handleEditUser = () => {
    editUser(id, { name, email });
  };

  return (
    <div>
      <h2>Edit User</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/><br/>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleEditUser}>Update</button>
      <Link to="/">Back to User List</Link>
    </div>
  );
};

export default EditUser;

