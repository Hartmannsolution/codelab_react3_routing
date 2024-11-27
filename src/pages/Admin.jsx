import {useState} from "react";
import { useOutletContext } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);
    const { user } = useOutletContext();

    if(!user.username){
      return (
        <div>
          <h1>Admin</h1>
          <p>Please login first</p>
        </div>
      );
    }
    if(!user.roles || user.roles.indexOf("admin") === -1){
      return (
        <div>
          <h1>Admin</h1>
          <p>You do not have the necessary rights to access this page</p>
        </div>
      );
    } else {
      fetch("http://localhost:3000/users").then(res=>res.json()).then(data=>setUsers(data));  
    }

      return (
        <div>
          <h1>Admin</h1>
          <p>Welcome to the Admin page!</p>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Roles</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.roles.join(", ")}</td>
                  <td><button>delete</button><button>edit</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  export default Admin;