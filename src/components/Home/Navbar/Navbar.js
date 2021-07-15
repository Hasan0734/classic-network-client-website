import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
     
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container">
                    <Link className="navbar-brand font-color">Classic Network</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                       <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link " >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">Support</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link">Contacts</Link>
                        </li>
                    </ul>
                    <button className="btn main-button">Login</button>
                    </div>
                </div>
            </nav>
      
    );
};

export default Navbar;