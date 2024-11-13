import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">fardani fatimazhara </span>
            <span className="purple"> .</span>
            <br />I am a full stack developer with hands-on experience at the
            Académie Régionale d'Éducation Rabat-Salé-Kénitra. I hold a degree
            as a Technicien Spécialisé in Full Stack Development, combining a
            strong technical foundation with practical expertise in both
            frontend and backend technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Book
            </li>

            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">FARDANI</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
