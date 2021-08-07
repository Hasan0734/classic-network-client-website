import React from "react";
import "./ContactForm.css";
const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <div className="form-area row">
          <div className="col-md-9 col-sm-12 m-auto">
            <div className="text-center pt-5">
              <h5 className="text-danger">CONTACT US</h5>
              <h1 className="text-secondary">
                Let us handle your <br /> project, Professionally
              </h1>
            </div>
            <form className="form-group mt-5" action="">
              <div className="d-flex">
                <input
                  className="form-control me-3"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="form-control ms-3"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <br />
              <div className="d-flex">
                <input
                  className="form-control me-3"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="form-control ms-3"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <br />
              <textarea
                className="form-control"
                placeholder="Your Message"
              ></textarea>
            </form>
            <div className="text-center mt-4">
              <button className="btn main-button">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
