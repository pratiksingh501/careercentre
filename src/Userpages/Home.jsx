import React, { Fragment } from "react";
import Header from "../Usercomponents/Header/Header";
import HeroSection from "../Usercomponents/Hero-Section/HeroSection";
import CompanySection from "../Usercomponents/Company-section/Company";

import AboutUs from "../Usercomponents/About-us/AboutUs";
import Courses from "../Usercomponents/Courses-section/Courses";
import ChooseUs from "../Usercomponents/Choose-us/ChooseUs";
import Features from "../Usercomponents/Feature-section/Features";
import FreeCourse from "../Usercomponents/Free-course-section/FreeCourse";

import Testimonials from "../Usercomponents/Testimonial/Testimonials";

import Newsletter from "../Usercomponents/Newsletter/Newsletter";
import Footer from "../Usercomponents/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const Home = () => {
  return (
    <Fragment>
      <br/><br/>
      <HeroSection />
      <br/><br/><br/><br/>
      <CompanySection />
      <br/><br/><br/><br/>
      <AboutUs /><br/>
      <br/><br/><br/><br/>
      {/* <Courses /> */}
      {/* <br/><br/><br/> */}
      {/* <ChooseUs /> */}
      {/* <br/><br/><br/> */}
      <Features />
      <br/><br/><br/>
      <FreeCourse />
      <br/><br/><br/>
      <Testimonials />
      <br/><br/><br/>
      {/* <Newsletter /> */}
      {/* <br/><br/><br/> */}
      <Footer />
    </Fragment>
  );
};

export default Home;
