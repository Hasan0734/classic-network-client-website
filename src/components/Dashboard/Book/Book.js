import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import ProccessPayment from "../Payment/ProccessPayment/ProccessPayment";
import Sidebar from "../Sidebar/Sidebar";

const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [service, setService] = useState({});
  const [shippingData, setShippingData] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [paymentError, setPaymentError] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://evening-lowlands-38698.herokuapp.com/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const newData = { ...data };
    setShippingData(newData);
  };

  const handlePaymentProcess = (paymentId) => {
    const bookingDetail = {
      ...loggedInUser,
      shipment: shippingData,
      bookingService: service,
      paymentId,
      bookingStatus: 'Pending',
      bookingTime: new Date(),
    };
    fetch("https://evening-lowlands-38698.herokuapp.com/addBook", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container-fluid row dashboard">
      <div className="col-md-2 sidebar">
        <Sidebar />
      </div>
      <div className="col-md-10 pe-0">
        <div className="d-flex align-items-center justify-content-between">
          <h4 style={{ padding: "22px" }}>Book</h4>
          <div className="user-area d-flex align-items-center">
            <img className="img-fluid" src={loggedInUser.img} alt="" />
            <h5 className="user-name">{loggedInUser.name}</h5>
          </div>
        </div>
        <div className="container-area">
            { service.id ? 
          <div style={{ display : paymentSuccess ? 'none' : 'block'}}>
            <div style={{ display: shippingData ? "none" : "block" }}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="form-group form-areas"
              >
                <h5>Name</h5>
                <input
                  className="form-control border-0 p-3 my-2"
                  {...register("name", { required: true })}
                  defaultValue={loggedInUser.name}
                  placeholder="Your Name"
                />
                {errors.name && (
                  <span className="text-danger">Name is required</span>
                )}

                <h5>Email</h5>
                <input
                  className="form-control border-0 p-3 my-2"
                  {...register("email", { required: true })}
                  defaultValue={loggedInUser.email}
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-danger">Email is required</span>
                )}

                <h5>Address</h5>
                <input
                  className="form-control border-0 p-3 my-2"
                  {...register("address", { required: true })}
                  placeholder="Shipping Address"
                />
                {errors.address && (
                  <span className="text-danger">Address is required</span>
                )}

                <h5>Service Name</h5>
                <input
                  className="form-control border-0 p-3 my-2"
                  defaultValue={service.title}
                  readOnly
                  style={{ background: "#fff" }}
                  placeholder="Service name"
                />

                <h4>
                  <small>Your Service charge will be: </small>
                  <b>${service.price}</b>
                </h4>
                <div className="text-center mt-4">
                  <input
                    className="btn main-button px-5 py-2"
                    type="submit"
                    value="Next →"
                  />
                </div>
              </form>
            </div>
            <div style={{ display: shippingData ? "block" : "none" }}>
              <ProccessPayment
                handlePayment={handlePaymentProcess}
                price={service.price}
                setPaymentSuccess = {setPaymentSuccess}
                setPaymentError = {setPaymentError}
              ></ProccessPayment>
            </div>
          </div>
          : <p >Please go back to <Link className="text-danger" to="/home">Home Service Container</Link></p>
          }
          {paymentError && <p className="text-danger">{paymentError}</p>}
          {paymentSuccess && <p className="text-success">Your payment was successful.</p> }
        </div>
      </div>
    </div>
  );
};

export default Book;
