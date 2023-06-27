import "./userList.css";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  
  return (
    <ul className="users">
      {users.map((user) => (
        <Link key={user.id} to={`/profile/${user.id}`}>
          <li>
            <img width="35px" src={user.profilepicture} alt="" />
            <p>{user.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default UserList;
