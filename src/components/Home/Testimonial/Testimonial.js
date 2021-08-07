import React from "react";
import "./Testimonial.css";
const Testimonial = ({ testimonial }) => {
  return (
    <div className="col-md-3">
      <div className="card testimonial-card mt-4">
        <img className="img-fluid testi-img" src={testimonial.img} alt="" />
        <h2 className="text-center text-white">{testimonial.name}</h2>
        <p className="text-white text-center">{testimonial.description}</p>
      </div>
    </div>
  );
};

export default Testimonial;
