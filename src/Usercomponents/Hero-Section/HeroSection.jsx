import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/Group 23.png";

import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h1 className="mb-4 hero__title" style={{fontFamily:'Gilroy-Bold'}}>
                Learn from <br /> the best <span style={{color:"#E6A26D", fontFamily:'Gilroy-Bold' }}> coding </span><br /> platform.
              </h1>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Aut saepe voluptatum earum delectus <br /> deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className="search homebtn" >
              View our courses
            </div>
          </Col>
          <Col lg="1" md="1">
           
          </Col>

          <Col lg="4" md="4">
            <img src={heroImg}  alt="" className="w-70 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
