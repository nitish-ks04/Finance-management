import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/navbar.css";
import logo from "../image/logo1.png"

function Navbar() {
  const [isloggedin, setisloggedin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isUser = localStorage.getItem("userInside");
    setisloggedin(!!isUser);

    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("userInside");
      setisloggedin(!!updatedUser);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [location]);

  const handleSignOut = () => {
    localStorage.removeItem("userInside");
    localStorage.removeItem("currentuser");
    setisloggedin(false); 
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="nav-logo-link">
          <img src={logo} alt="logo" className="nav-logo" />
          <span className="nav-title">TrackIt</span>
        </Link>
      </div>
      <div className="nav-link">
        {!isloggedin ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/regis">Sign Up</Link>
          </>
        ) : (
          <button onClick={handleSignOut}>Sign Out</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
