import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Collapse from "../components/collapse/Collapse";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function About() {
  const [openSection, setOpenSection] = useState("Compétences");

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Image 
                src="/images/portrait.png" 
                className="img-fluid" 
                alt="avatar" 
                width={500} 
                height={500} />
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>À propos de moi</h1>
            <p className="home-about-body">
              Développeuse web full-stack, je suis animée par la création d’applications dynamiques et performantes. 
              Mon parcours m’a permis de maîtriser des technologies telles que <b className="green">HTML, CSS, Sass, Javascript, React, Bootstrap, Next.js, Node.js,
                  Express, API Rest, MongoDB, Git.</b>
              <br/>
              <br/>Curieuse et persévérante, 
              j’aime relever des défis techniques et apprendre de nouvelles compétences. 
              Le travail en équipe m’inspire et je suis toujours enthousiaste à l’idée de contribuer à des 
              projets collectifs. 
              <br/>
              <br/>Je suis actuellement en recherche d'alternance pour poursuivre une formation bac+3 
              Concepteur Développeur d'Applications avec une spécialisation en Java et Angular.
            </p>
    <div className="collapse-container">
        <Row className="collapse-row">
            <Col md={4}>
            <Collapse
                title="Compétences"
                isOpen={openSection === "Compétences"}
                onClick={() => setOpenSection("Compétences")}
            >
                <ul>
                    <li><span>Frontend :</span>   HTML, CSS, Javascript,Sass, React, Bootstrap, Next.js</li>
                    <li><span>Backend :</span>   Node.js, Express</li>
                    <li><span>Outils :</span>   MongoDB, API Rest, Git</li>
                    <li><span>Autres :</span>   Design</li>
                </ul>
            </Collapse>
            </Col>
            <Col md={4}>
            <Collapse
                title="Éducation"
                isOpen={openSection === "Éducation"}
                onClick={() => setOpenSection("Éducation")}
            >
                <ul>
                    <li>BAC +2 Développeur Web</li>
                    <li>BAC +3 Cinéma d'Animation 2D</li>
                </ul>
            </Collapse>
            </Col>
            <Col md={4}>
            <Collapse
                title="Compétences visées"
                isOpen={openSection === "Compétences visées"}
                onClick={() => setOpenSection("Compétences visées")}
            >
                <ul>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>Microservices</li>
                    <li>PHP</li>
                    <li>Angular</li>
                    <li>Python</li>
                </ul>
            </Collapse>
            </Col>
        </Row>
    </div>
    </Col>
            <Col md={12} className="home-about-social">
                <h1>Liens sociaux</h1>
                <p>
                    N'hésitez pas à me{" "}
                <Link href="/contact" className="green">contacter</Link>
                </p>
                <ul className="home-about-social-links">
                    <li className="social-icons">
                    <a
                    href="https://github.com/manarlam"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                    <AiFillGithub />
                    </a>
                    </li>
                    <li className="social-icons">
                    <a
                    href="https://www.linkedin.com/in/manar-lamrani-663806140/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                >
                    <FaLinkedinIn />
                    </a>
                    </li>
                    </ul>
            </Col>
        </Row>   
    </Container>
</Container>
  );
}

export default About;
