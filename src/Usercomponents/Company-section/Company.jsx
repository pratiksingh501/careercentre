import React from "react";
import { Container, Row, Col } from "reactstrap";
import Marquee from "react-fast-marquee";

const Company = () => {
  return (
    <section>
      <Container>
        <Row>
          <h1 style={{fontFamily:"Gilroy-Bold", textAlign:"center", marginBottom:"100px"}}>Top Brands our students working with.</h1>      
        </Row>
        <Marquee speed={90} pauseOnHover={true}>
        <Row>
      
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-2">
              <i class="ri-vimeo-line"></i> Vimeo
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-2">
              <i class="ri-pinterest-line"></i> Pinterest
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-2">
              <i class="ri-dribbble-line"></i> Dribble
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-4">
              {" "}
              <i class="ri-apple-fill"></i> Apple
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-4">
              {" "}
              <i class="ri-finder-fill"></i> Finder
            </h3>
          </Col>
          

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-4">
              {" "}
              <i class="ri-google-fill"></i> Google
            </h2>
          </Col>
        </Row>
        </Marquee>

      </Container>
    </section>
  );
};

export default Company;
