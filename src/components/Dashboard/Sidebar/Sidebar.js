import {
  faCartArrowDown,
  faClipboardList,
  faCommentDots,
  faListUl,
  faThLarge,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import "./Sidebar.css";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin")) || null
  );
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 b-light">
      <h1>Repair Service</h1>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {isAdmin === null && (
          <div>
            <li className="nav-item bg-item mt-2">
              <Link to="/book" className="nav-link link-dark">
                <FontAwesomeIcon icon={faCartArrowDown} /> Book
              </Link>
            </li>
            <li className="nav-item bg-item mt-2">
              <Link to="/booking-list" className="nav-link link-dark">
                <FontAwesomeIcon icon={faClipboardList} /> Booking list
              </Link>
            </li>
            <li className="nav-item bg-item mt-2">
              <Link to="/review" className="nav-link link-dark">
                <FontAwesomeIcon icon={faCommentDots} /> Review
              </Link>
            </li>
          </div>
        )}
        {isAdmin && (
          <div>
            <li className="nav-item bg-item mt-2">
              <Link to="/admin/order-lists" className="nav-link link-dark">
                <FontAwesomeIcon icon={faListUl} /> Order list
              </Link>
            </li>
            <li className="nav-item bg-item mt-2">
              <Link to="/admin/add-service" className="nav-link link-dark">
                <FontAwesomeIcon icon={faUserPlus} /> Add Service
              </Link>
            </li>
            <li className="nav-item bg-item mt-2">
              <Link to="/admin/make-admin" className="nav-link link-dark">
                <FontAwesomeIcon icon={faListUl} /> Make admin
              </Link>
            </li>
            <li className="nav-item bg-item mt-2">
              <Link to="/admin/manage-service" className="nav-link link-dark">
                <FontAwesomeIcon icon={faThLarge} /> Manage Services
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
