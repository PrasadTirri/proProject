import "./profileModal.css";
import { Link } from "react-router-dom";

const ProfileModal = ({ activeUser, users, modalOpened }) => {
  return (
    
    <div className={`profileModal ${modalOpened && "active"}`}>
      <div className="activeUserProfile">
        <img width="100px" src={activeUser.profilepicture} alt="" />
        <p className="userName">{activeUser.name}</p>
        <p className="userEmail">{activeUser.email}</p>
      </div>
      <div className="otherUsers">
        <ul className="users">
         
          {users.map(
            (user) =>
              activeUser.id !== user.id && (
                <li key={user.id}>
                  <img width="35px" src={user.profilepicture} alt="" />
                  <p>{user.name}</p>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="signOut">
        <Link to={"/"} className="signOutBtn">
          Sign Out
        </Link>
      </div>
    </div>
  );
};

export default ProfileModal;
