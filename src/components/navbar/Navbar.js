import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchActiveUser } from "../../pages/profilePage/singleUserSlice";
import { Loading, ProfileModal } from "..";
import { fetchUsers } from "../../pages/landingPage/usersSlice";

const Navbar = ({ pageTitle }) => {
  
  const [modalOpened, setModalOpened] = useState(false);

  const { id } = useParams();
  const dispatch = useDispatch();
  
  const modalRef = useRef();
  const profileInfoRef = useRef();


  const { activeUser, loading } = useSelector((state) => state.activeUser);
 
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
  
    dispatch(fetchUsers());
   
    dispatch(fetchActiveUser(id));

    const handleOutsideClick = (event) => {
     
      if (
        !modalRef.current.contains(event.target) &&
        !profileInfoRef.current.contains(event.target)
      ) {
        setModalOpened(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);

    
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [dispatch, id]);

  return (
    <>
      {loading && <Loading />}
      <div className="navbar">
        <h3 className="PageTitle">{pageTitle}</h3>
        <div className="userProfile">
          <div
            className="activeUserInfo"
            onClick={() => setModalOpened((state) => !state)}
            ref={profileInfoRef}
          >
            <img width="35px" src={activeUser.profilepicture} alt="" />
            <p className="userName">{activeUser.name}</p>
          </div>

          <div className="profileModalWrapper" ref={modalRef}>
           
            <ProfileModal
              activeUser={activeUser}
              users={users}
              modalOpened={modalOpened}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
