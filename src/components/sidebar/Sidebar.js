import "./sidebar.css";
import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { AiOutlineRight, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  
  const [active, setActive] = useState("");

  
  const [mobileSidebarActive, setMobileSidebarActive] = useState(false);

  
  const { id } = useParams("id");
  
  const location = useLocation();

  
  useEffect(() => {
    const path = location.pathname;
    if (path === "/profile/" + id) {
      setActive("profile");
    } else if (path.includes("/profile/" + id + "/posts")) {
      setActive("posts");
    } else if (path.includes("/profile/" + id + "/gallery")) {
      setActive("gallery");
    } else if (path.includes("/profile/" + id + "/todo")) {
      setActive("todo");
    }
  }, [location, id]);

  return (
    <div className={`sidebar ${mobileSidebarActive && "MobileSidebarActive"}`}>
      <div
        className="menu-icon"
        onClick={() => setMobileSidebarActive((state) => !state)}
      >
        {!mobileSidebarActive ? <AiOutlineMenu /> : <AiOutlineClose />}
      </div>
      <ul className="navlinks">
        
        <Link to={`/profile/${id}`}>
          <li
            style={{ color: `${active === "profile" ? "white" : "#a5a5e4"}` }}
          >
            Profile
            {active === "profile" && (
              <div className="active">
                <AiOutlineRight color="#BDC5D4" strokeWidth="50" />
              </div>
            )}
          </li>
        </Link>

        
        <Link to={`/profile/${id}/posts`}>
          <li style={{ color: `${active === "posts" ? "white" : "#a5a5e4"}` }}>
            Posts
            {active === "posts" && (
              <div className="active">
                <AiOutlineRight color="#BDC5D4" strokeWidth="50" />
              </div>
            )}
          </li>
        </Link>
        
        <Link to={`/profile/${id}/gallery`}>
          <li
            style={{ color: `${active === "gallery" ? "white" : "#a5a5e4"}` }}
          >
            Gallery
            {active === "gallery" && (
              <div className="active">
                <AiOutlineRight color="#BDC5D4" strokeWidth="50" />
              </div>
            )}
          </li>
        </Link>

        
        <Link to={`/profile/${id}/todo`}>
          <li style={{ color: `${active === "todo" ? "white" : "#a5a5e4"}` }}>
            ToDo
            {active === "todo" && (
              <div className="active">
                <AiOutlineRight color="#BDC5D4" strokeWidth="50" />
              </div>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
