import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./AddService.css";
import { useForm } from "react-hook-form";

const AddService = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [addSuccess, setAddSuccess] = useState(null)

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
      formData.append('file', data.file[0])
      formData.append('title', data.title)
      formData.append('description', data.description)
      formData.append('price', data.price)
    fetch("https://evening-lowlands-38698.herokuapp.com/addService", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if(data) {
          setAddSuccess(true)
          reset()
        }
      })
  };
  
  return (
    <div className="container-fluid row dashboard">
      <div className="col-md-2 sidebar">
        <Sidebar />
      </div>
      <div className="col-md-10 pe-0">
        <div className="d-flex align-items-center justify-content-between">
          <h4 style={{ padding: "22px" }}>Add Service</h4>
          <div className="user-area d-flex align-items-center">
          <img className="img-fluid" src={loggedInUser.img} alt="" />
          <h5 className="user-name">{loggedInUser.name}</h5>
          </div>
        </div>
        <div className="container-area">
          <div className="card add-service-area">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div
                className="d-flex justify-content-between"
                style={{ width: "650px" }}
              >
                <div>
                  <h6>Service Title</h6>
                  <input className="form-control" {...register("title", { required: true })} placeholder="Enter title"/>
                  {errors.title && <span className="text-danger">This field is required</span>}
                 <h6>Price</h6>
                 <input className="form-control" {...register("price", { required: true })} placeholder="Service Price" />
                 {errors.price && <span className="text-danger">This field is required</span>}
                  <div className="form-group service-description">
                    <h6>Description</h6>
                    <textarea
                      className="form-control" {...register("description", { required: true })}
                      placeholder="Enter Designation"
                    ></textarea>
                    {errors.description && <span className="text-danger">This field is required</span>}
                  </div>
                </div>
                <div className="form-group ms-5">
                  <h6>Image</h6>
                  <label
                 
                    className="text-white btn main-button p-2"
                    htmlFor="file"
                  >
                    <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload image
                  </label>
                 
                  <input
                   {...register("file", { required: true })}
                    style={{ display: "none" }}
                   
                    className="form-control"
                    id="file"
                    type="file"
                  />
                   {errors.file && <span className="text-danger">This field is required</span>}
                </div>
              </div>
              <input  className="btn main-button mt-4" type="Submit"/>
                {addSuccess && <p className="text-success">Service Added</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
