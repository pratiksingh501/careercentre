import React from "react";
import { Container, Row, Col } from "reactstrap";
// import heroImg from "../../assests/images/Group 23.png";
import Picture1 from "../../assests/images/Frame2.png";


import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              {/* <h1 className="mb-4 hero__title" style={{fontFamily:'Gilroy-Bold'}}>
                Learn from <br /> the best <span style={{color:"#E6A26D", fontFamily:'Gilroy-Bold' }}> coding </span><br /> platform.
              </h1> */}
              <h1 className="mb-4 hero__title" style={{fontFamily:'Gilroy-Bold'}}>
               About Us
              </h1>
              <p className="mb-5">
              Career Centre is an integrated cloud-based application platform,
            that connects universities, colleges, students, corporates, course
            providers, certificate agencies, testing service providers, and
            other allied partners to meaningfully engage for student career
            development and outcomes.
              </p>
            </div>
            <div className="search homebtn" >
              Know More
            </div>
          </Col>
          <Col lg="1" md="1">
           
          </Col>

          <Col lg="4" md="4">
            <img src={Picture1} style={{width:"140%"}}  alt="" className="hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
