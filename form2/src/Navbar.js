import { Link, useNavigate } from "react-router-dom";
import "./style.css"
const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="navbar">
        <div className="navpanel">

      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
        </div>
        <div>

      {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (<></>
            // <Link to="/login">Login</Link>
        )}
        </div>
    </nav>
  );
};

export default Navbar;
