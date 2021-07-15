import React from 'react';
import './Prefer.css'

const Prefer = ({prefer}) => {
    return (
        <div className="col-md-3">
            <div className="card simple-card">
                <img className="w-25 d-flex justify-items-center image" src={prefer.icon} alt="" />
                <h3 className="text-color" className="card-title my-4">{prefer.title}</h3>
                <p className="card-text">{prefer.text}</p>
                <button className="btn">Learn more →</button>
            </div>
        </div>
    );
};

export default Prefer;