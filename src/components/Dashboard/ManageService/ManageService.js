import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import ServiceTableData from '../ServiceTableData/ServiceTableData';
import Sidebar from '../Sidebar/Sidebar';
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const ManageService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("rgb(54, 215, 183)");
    useEffect(() => {
        fetch('https://evening-lowlands-38698.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    }, [])

    return (
        <div className="container-fluid row dashboard">
            <div className="col-md-2 sidebar">
                <Sidebar/>
            </div>
            <div className="col-md-10 pe-0">
                 <div className="d-flex align-items-center justify-content-between">
                    <h4 style={{padding: "22px"}}>Order Lists</h4>
                    <div className="user-area d-flex align-items-center">
          <img className="img-fluid" src={loggedInUser.img} alt="" />
          <h5 className="user-name">{loggedInUser.name}</h5>
          </div>
                </div>
                <div className="container-area">
                   
                    {services.length > 0 ?  <div className="card p-5">
                    <div className="table-responsive">
                   <table className="table table-sm  table-hover">
                        <thead className="thead-dark ">
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th className="text-center" scope="col">ID</th>
                                <th scope="col">Delete</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                          {services.map(service => <ServiceTableData service={service} key={service._id}></ServiceTableData>)}
                        </tbody>
                    </table>
                   </div>
                   </div>
                   : <div className="sweet-loading text-center">
                     <BeatLoader color={color} loading={loading} css={override} size={15} />
                     </div>

                   }
                   
                </div>
            </div>
        </div>
    );
};

export default ManageService;