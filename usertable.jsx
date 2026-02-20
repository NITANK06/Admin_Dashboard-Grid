import { useState } from "react";

const UserTable = () => {
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@email.com" },
    { id: 2, name: "Jane Smith", email: "jane@email.com" }
  ]);

  return (
    <div className="table-container">
      <h3>Users</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
