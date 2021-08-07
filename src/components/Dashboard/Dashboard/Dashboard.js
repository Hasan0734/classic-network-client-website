import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import BookingLists from "../BookingLists/BookingLists";
import OrderLists from "../OrderLists/OrderLists";

import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";
const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin")) || null
  );
  return (
    <>
      {isAdmin ? (
        <OrderLists></OrderLists>
      ) : (
        <div className="container-fluid row dashboard">
          <div className="col-md-2 sidebar">
            <Sidebar />
          </div>
          <div className="col-md-10 pe-0 ps-0">
            <div className="d-flex align-items-center justify-content-between">
              <h3 style={{ padding: "22px" }}>Booking List</h3>
              <div className="user-area d-flex align-items-center">
                <img className="img-fluid" src={loggedInUser.img} alt="" />
                <h5 className="user-name">{loggedInUser.name}</h5>
              </div>
            </div>
            <BookingLists></BookingLists>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
