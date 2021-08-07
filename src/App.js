import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Book from "./components/Dashboard/Book/Book";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import OrderLists from "./components/Dashboard/OrderLists/OrderLists";
import Review from "./components/Dashboard/Review/Review";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import MakeAdmin from "./components/Dashboard/MakeAdmin/MakeAdmin";
import AddService from "./components/Dashboard/AddService/AddService";
import ManageService from "./components/Dashboard/ManageService/ManageService";

export const UserContext = createContext({});

function App() {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(sessionStorage.getItem("userInfo")) || {}
  );
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          {isAdmin === null && (
            <div>
              <PrivateRoute path="/booking/:id">
                <Book />
              </PrivateRoute>
              <PrivateRoute path="/book">
                <Book />
              </PrivateRoute>
              <PrivateRoute path="/review">
                <Review />
              </PrivateRoute>
              <PrivateRoute path="/booking-list">
                <Dashboard />
              </PrivateRoute>
            </div>
          )}
          {isAdmin && (
            <div>
              <PrivateRoute path="/admin/order-lists">
                <OrderLists />
              </PrivateRoute>
              <PrivateRoute path="/admin/make-admin">
                <MakeAdmin />
              </PrivateRoute>
              <PrivateRoute path="/admin/add-service">
                <AddService />
              </PrivateRoute>
              <PrivateRoute path="/admin/manage-service">
                <ManageService />
              </PrivateRoute>
            </div>
          )}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
