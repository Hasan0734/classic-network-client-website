import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Navbar.css";
const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSignOut = () => {
    setLoggedInUser({});
    sessionStorage.removeItem("userInfo");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("admin");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <Link className="navbar-brand font-color">Repair Service</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link ">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Contact</Link>
            </li>
          </ul>
          {loggedInUser.email ? (
            <button onClick={handleSignOut} className="btn main-button">
              Sign out
            </button>
          ) : (
            <Link to="/login">
              {" "}
              <button className="btn main-button">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
