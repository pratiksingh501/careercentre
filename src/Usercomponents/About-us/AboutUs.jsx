import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/AboutImg.svg";
import CountUp from "react-countup";
import "./about.css";
import "../../style.css"

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6" style={{display:"flex", flexDirection:"column", justifyContent:"center", }}>
            <div className="about__content" >
              <h2>About Us</h2>
              <p>
              Career Centre is an integrated cloud-based application platform,
            that connects universities, colleges, students, corporates, course
            providers, certificate agencies, testing service providers, and
            other allied partners to meaningfully engage for student career
            development and outcomes.
              </p>

              <div className="about__counter">
              

              <button className="homebtn about">Know More</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
