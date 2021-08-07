import React, { useContext, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [success, setSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://evening-lowlands-38698.herokuapp.com/addAdmin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res) {
          setSuccess(true);
          reset();
        }
        console.log(res);
      })
      .catch((err) => {
        setSuccess(null);
      });
  };
  return (
    <div className="container-fluid row dashboard">
      <div className="col-md-2 sidebar">
        <Sidebar />
      </div>
      <div className="col-md-10 pe-0">
        <div className="d-flex align-items-center justify-content-between">
          <h4 style={{ padding: "22px" }}>Add user</h4>
          <div className="user-area d-flex align-items-center">
            <img className="img-fluid" src={loggedInUser.img} alt="" />
            <h5 className="user-name">{loggedInUser.name}</h5>
          </div>
        </div>

        <div className="container-area">
          <h6>Email</h6>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control border-0 p-2 m-0"
              {...register("email", { required: true })}
              placeholder="admin@gmail.com"
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
            <br />
            <input className="btn main-button" type="Submit" />
            {success && <p className="text-success mt-4">Admin add success</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
