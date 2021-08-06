import { faEnvelope, faMapMarkerAlt, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <h2 className="company-name">Repair Service</h2>
                <div className="row mt-5">
                    <div className="col-md-3 col-sm-6">

                        <h5 className="text-white mb-4"><u>Company</u></h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link to="/about" className="link">About</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/support" className="link">Support</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/services" className="link">Services</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/blogs" className="link">Blogs</Link>
                            </li>
                            <li className="mb-2">
                                <Link to="/testimonials" className="link">Testimonials</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <h5 className="text-white mb-4"><u>Services</u></h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link className="link">Residential Electrical</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link">Business Electrical</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link">Industrial Electrical</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link">Solar Electrical</Link>
                            </li>
                            <li>
                                <Link className="link">Electrical Testing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <h5 className="text-white mb-4"><u>We Areas</u></h5>
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <Link className="link">London</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link">Birmingham</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link">Mancheseter</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link">Leeds</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="link">Sheffield</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                    <h5 className="text-white mb-4"><u>Address</u></h5>
                        <ul className="list-unstyled">
                            <li className="mb-2 link">
                          <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt}/>  New York, NY 10012, US
                            </li>
                            <li className="mb-2 link">
                          <FontAwesomeIcon className="me-2" icon={faEnvelope}/>  info@gmail.com
                            </li>
                            <li className="mb-2 link">
                          <FontAwesomeIcon className="me-2" icon={faPhone}/>  +01 234 567 88
                            </li>
                            <li className="mb-2 link">
                           <FontAwesomeIcon className="me-2" icon={faPrint}/> +01 234 567 88
                            </li>
                        </ul>
                    </div>
                </div>
                <p style={{marginTop: '50px', marginBottom: '0', padding: '5px'}} className="text-white text-center"><small>© {new Date().getFullYear()} Copyright: Repair Services. </small></p>
            </div>
           
        </footer>
    );
};

export default Footer;