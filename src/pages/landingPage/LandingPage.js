import "./landingPage.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import { SkeletonLoading, UserList } from "../../components";

const LandingPage = () => {
  
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="landingPage">
      <div className="usersContainer">
        <div className="title">
          <h4>Select an account</h4>
        </div>
        
        {loading ? (
          <SkeletonLoading />
        ) : (
          <div className="users-wrapper">
            <UserList users={users} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
