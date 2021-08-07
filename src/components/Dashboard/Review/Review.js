import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import "./Review.css";
const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [notify, setNotify] = useState(null);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newData = { ...data };

    newData.email = loggedInUser.email;
    newData.img = loggedInUser.img;
    fetch("https://evening-lowlands-38698.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => {
        if (res) {
          setNotify(true);
          setError(null);
        }
        reset();
      })
      .catch((err) => {
        setError(true);
        setNotify(null);
      });
  };

  return (
    <div className="container-fluid row dashboard">
      <div className="col-md-2 sidebar">
        <Sidebar />
      </div>
      <div className="col-md-10 pe-0">
        <div className="d-flex align-items-center justify-content-between">
          <h4 style={{ padding: "22px" }}>Review</h4>
          <div className="user-area d-flex align-items-center">
            <img className="img-fluid" src={loggedInUser.img} alt="" />
            <h5 className="user-name">{loggedInUser.name}</h5>
          </div>
        </div>
        <div className="container-area">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-group form-areas"
          >
            <input
              className="form-control border-0 p-3 m-0"
              {...register("name", { required: true })}
              placeholder="Your Name"
            />
            {errors.name && (
              <span className="text-danger ">Name is required</span>
            )}
            <br />

            <input
              className="form-control border-0 p-3 m-0"
              {...register("designation", { required: true })}
              placeholder="Company's name, Designation"
            />
            {errors.designation && (
              <span className="text-danger">Designation is required</span>
            )}
            <br />
            <textarea
              {...register("description", { required: true })}
              style={{ resize: "none", width: "93%" }}
              className="form-control border-0"
              cols="30"
              rows="6"
              placeholder="Description"
            ></textarea>
            {errors.description && (
              <span className="text-danger">Description is required</span>
            )}
            <div className="text-center pt-4">
              <input type="submit" className="btn main-button px-5" />
            </div>
            {notify && (
              <p className="text-success mt-2 text-center">Review Successful</p>
            )}
            {error && (
              <p className="text-danger mt-2 text-center">
                Review Unsuccessful
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
