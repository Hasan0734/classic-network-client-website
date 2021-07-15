import React from 'react';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main class="container my-5">
            <div className="header-main">
               <div className="d-flex justify-content-center text-center">
               <div style={{marginTop: '65px'}}>
               <h1 style={{fontSize: '55px'}} className="text-white">Get Ready for Ultra <br/> Speed Internet</h1>
                <p className="text-white">We’re bring gigabit Internet to all our customers, starting <br/> mid 2017.</p>
                <button className="btn btn-primary">Book Now</button>
               </div>
               </div>
            </div>
        </main>
    );
};

export default HeaderMain;