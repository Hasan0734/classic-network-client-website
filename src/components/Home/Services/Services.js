import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("rgb(54, 215, 183)");
  useEffect(() => {
    fetch("https://evening-lowlands-38698.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <section className="service-container">
      <div className="container">
        <h4 className="text-center pt-5 text-danger">OUR SERVICES</h4>
        <h1 className="text-center mt-4 text-secondary">
          Provide Best Electrician Services
        </h1>

        <div className="row mt-5">
          {services.map((service) => (
            <Service service={service} key={service._id}></Service>
          ))}
          {services.length === 0 && (
            <div className="sweet-loading text-center">
              <BeatLoader
                color={color}
                loading={loading}
                css={override}
                size={15}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
