import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
   
    return (
        <div className="col-md-4">
            <div className="card service-card mt-4">
                <img className="img-fluid img-top" src={service.img} alt="" />
                { service.image && <img className="img-fluid" src={`data:image/png;base64,${service.image.img}`} alt=""/> }
               <div className="card-content">
               <h2>{service.title}</h2>
                <p className="text-secondary mt-4">{service.description}</p>
              <div className="d-flex justify-content-between mt-4 mb-2">
                  <h3>${service.price}</h3>
             <Link to={`/booking/${service._id}`} > <button className="btn main-button">Book Now →</button></Link>
              </div>
               </div>
            </div>
        </div>
    );
};

export default Service;