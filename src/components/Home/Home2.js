import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/avartar.png";

import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a passionate full-stack developer who fell in love wit
              programming and continuously seeks to learn and grow in this field
              💻💡
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, JAVA . </b>
              </i>
              <br />
              <br />I have experience in both PHP , with the &nbsp;
              <i>
                <b className="purple"> LARAVEL </b> framework and JAVA SCRIPTS
                with frameworks like {""} <b className="purple">REACT.</b>
              </i>
              <br />
              <br />
              My skill set also extends to PYTHON ,CSS, BOOTSTRAP, TAILWIND, and
              server-side technologies like NODE.JS and {""}
              <b className="purple">EXPRESS</b> and I work with modern
              <i>
                <b className="purple"> JAVASCRIPT</b>
              </i>
              &nbsp; libraries and frameworks, including
              <i>
                <b className="purple"> REACT.JS</b>
              </i>
              &nbsp; to build innovative, full-stack solutions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            {/*  */}
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/fatimazahrafardani"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fatimazahra-fardani-25b3ab258/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/fati.mazahra04/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
