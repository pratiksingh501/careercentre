import React from "react";
import Courses from "../Usercomponents/Courses-section/Courses";
import "../style.css"


const CourseWeb = () => {
  return (
    <div className= "courses_page">
      <div className="banner"></div>
      <h1>
        Code creative Web Design & Development, Create Modern Web
        Experiences
      </h1>
      <Courses />
    </div>
  );
};

export default CourseWeb;
