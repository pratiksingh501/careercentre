import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Update",
    imgUrl: courseImg01,
    desc: " Update your Skill Profile from time to time"
  },
  {
    id: "02",
    title: "Enhance",
    imgUrl: courseImg02,
    desc: "Enhance your skills by enrolling for courses, events, internships and other opportunities"
 
  },

  {
    id: "03",
    title: "Showcase",
    imgUrl: courseImg03,
    desc: "Showcase your skill profile to corporates in a manner you or they have never seen before"
    
  },

  {
    id: "04",
    title: "Apply",
    imgUrl: courseImg04,
    desc: "Apply for jobs and internships from corporates on MUCC that align to your skill sets"
    
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h1 className="fw-bold" style={{fontFamily:"Gilroy-Bold"}}>How it works</h1>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
