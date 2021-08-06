import React, { useContext, useEffect, useState } from "react";
import googleIcon from "../../../image/icon/google.png";
import "./Login.css";
import firebase from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/auth";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  
  
  const [error, setError] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        const newUser = {
            email: user.email,
            name: user.displayName,
            img: user.photoURL
        };
       sessionStorage.setItem('userInfo', JSON.stringify(newUser))
        setLoggedInUser(newUser)
        storeAuthToken();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoggedInUser({error: errorMessage});
        setError(true);
      });
  };
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken( true)
      .then((idToken) => {
        sessionStorage.setItem("token", idToken);
        
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetch('http://localhost:5500/isAdmin', {
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => {
            sessionStorage.setItem("admin", JSON.stringify(data[0].email))
    })
    .catch(err => console.log(err))
   
},[loggedInUser.email])
  return (
    <div className="login-container">
      <div>
        <h1 style={{ color: "#f91c7e" }} className="text-center">
          Repair Service
        </h1>
        <div className="login-area text-center">
          <h3>Login With</h3>
          <button
            onClick={handleGoogleSignIn}
            className="btn  d-flex with-google"
          >
            <img src={googleIcon} alt="" />
            <span>Continue with Google</span>
          </button>
        {error &&   <p className="text-danger mt-5">{loggedInUser.error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
