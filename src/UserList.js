import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <Link to={`/edit/${user.id}`}>Edit</Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/add">Add User</Link>
    </div>
  );
};

export default UserList;
