import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main class="header-main">
            <div className="container">
               <div className="d-flex justify-content-center header-text text-center">
               <div>
               <h2 className="text-white header-title">Treating Customer <br/> As Our Beloved Family</h2>
                <p className="text-white mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Deserunt corrupti, animi nemo eius ab mollitia.</p>
                <button className="btn btn-primary">Book Now →</button>
               </div>
               </div>
            </div>
        </main>
    );
};

export default HeaderMain;