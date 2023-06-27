import "./notFound.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <img
        width={"500px"}
        src="https://cdn.dribbble.com/users/252114/screenshots/3840347/mong03b.gif"
        alt=""
      />
      <h2>Not Found</h2>
      <Link to={"/"}>Back Home</Link>
    </div>
  );
};

export default NotFound;
