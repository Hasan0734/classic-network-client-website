import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("rgb(54, 215, 183)");
    useEffect(() => {
        fetch('https://evening-lowlands-38698.herokuapp.com/review')
        .then(res => res.json())
        .then(data => {
            setTestimonials(data)
        })
    }, [])
    return (
        <section className="testimonial-container">
            <div className="container">
                <h4 className="text-center text-danger">TESTIMONIAL</h4>
                <h1 className="text-center text-secondary mt-4 mb-5">What Our Clients Says About Us</h1>
                <div className="row">
                    {
                       testimonials.map(testimonial => <Testimonial testimonial = {testimonial} key={testimonial._id}></Testimonial>) 
                    }
                    {testimonials.length === 0 &&  <div className="sweet-loading text-center">
                     <BeatLoader color={color} loading={loading} css={override} size={15} />
                     </div>}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;