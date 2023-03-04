import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Your Profile",
    desc: ": Comprehensive student relevant fields like academics, certifications, trainings, skiils, projects, internships, events...",
    icon: "ri-draft-line",
  },

  {
    title: "Skill Building",
    desc: " Activities and opportunities put up by course providers, skill centres, trainers, event organizers and other players in the career ecosystem",
    icon: "ri-discuss-line",
  },

  {
    title: "Assessments",
    desc: "Psychographic and Technical Assessments used by big companies to hire are put up on the platform. Take up these assessments and showcase results on your profile",
    icon: "ri-contacts-book-line",
  },

  {
    title: "Jobs and Internship",
    desc: ": Job/ Internship search and application as per geography, sector, department and skill match",
    icon: "ri-draft-line",
  },

  {
    title: "Upcoming Feature",
    desc: "Mentor listing and AMA Boards Profile search by corporate and role matching Fresher role to skill matching info AI-based job readiness measurement",
    icon: "ri-discuss-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <h1 style={{fontFamily:"Gilroy-Bold", textAlign:"center"}}>Key Features</h1>
        <br/>
        <br/>
        <Row style={{textAlign:"center", display:"flex", alignItems:"center"}}>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
