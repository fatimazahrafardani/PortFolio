import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Safarwithuse from "../../Assets/Projects/Safarwithuse.PNG";
import kaylie from "../../Assets/Projects/kaylie.PNG";
import ecole from "../../Assets/Projects/ecole.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaylie}
              isBlog={false}
              title="kaylie"
              description="Kaylie Cosmetics is a sleek, user-friendly platform offering a curated range of beauty products to enhance natural beauty and empower self-expression. Explore skincare, makeup, and more—all designed to inspire confidence and elevate daily routines.."
              ghLink="https://github.com/fatimazahrafardani/kaylie"
              demoLink="https://fatyhors122.netlify.app/first%20page.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Safarwithuse}
              isBlog={false}
              title="SafarWithUse"
              description="SafarWithus is a travel platform offering a seamless experience for discovering destinations, with personalized recommendations and essential travel information.
              Designed with React and Laravel, it provides an intuitive, user-friendly interface for all types of travelers."
              ghLink=""
              demoLink="A"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecole}
              isBlog={false}
              title="Gerer Ecole Prive"
              description="Gerer Ecole Prive is an administrative platform for managing private schools within the Académie Régionale d'Éducation, offering tools for student enrollment, school operations, 
              and communication between teachers, students, and parents"
              ghLink="https://github.com"
              demoLink="http"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="School-Management"
              description=" includes features such as student attendance tracking, grade management, performance reports, and fee tracking. The platform also allows seamless communication between parents, teachers, and school administrators, with a focus on making school administration easier and more organized."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
