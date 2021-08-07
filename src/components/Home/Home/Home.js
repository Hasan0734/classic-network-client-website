import React from "react";
import Blogs from "../Blogs/Blogs";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="home-container">
      <Header></Header>
      <Services></Services>
      <Blogs></Blogs>
      <Testimonials></Testimonials>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
