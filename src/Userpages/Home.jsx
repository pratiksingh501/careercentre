import React, { Fragment } from "react";
import HeroSection from "../Usercomponents/Hero-Section/HeroSection";
import CompanySection from "../Usercomponents/Company-section/Company";

import AboutUs from "../Usercomponents/About-us/AboutUs";
import Features from "../Usercomponents/Feature-section/Features";
import FreeCourse from "../Usercomponents/Free-course-section/FreeCourse";

import Testimonials from "../Usercomponents/Testimonial/Testimonials";

import Footer from "../Usercomponents/Footer/Footer";


const Home = () => {
  return (
    <Fragment>
      <br/><br/>
      <HeroSection />
      <br/><br/><br/><br/>
    
      {/* <AboutUs /><br/> */}
      {/* <br/><br/><br/><br/> */}
      <Features />
      <br/><br/><br/>
      <FreeCourse />
      <br/><br/><br/>
      <CompanySection />
      <br/><br/><br/><br/>
      <Testimonials />
      <br/><br/><br/>
      {/* <Newsletter /> */}
      {/* <br/><br/><br/>  */}
      <Footer />
    </Fragment>
  );
};

export default Home;
