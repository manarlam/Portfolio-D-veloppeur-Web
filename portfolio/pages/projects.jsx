import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/card/Card";
import projectsData from "../data/data.json";
import kasa from "../public/images/projects/kasa.png";
import bluel from "../public/images/projects/bluelcoub.png";
import booki from "../public/images/projects/booki.png";
import nina from "../public/images/projects/nina.png";
import grimoire from "../public/images/projects/grimoire.png";

const images = {
  kasa,
  bluel,
  booki,
  nina,
  grimoire,
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">Projets scolaires</h1>
        <p style={{ color: "#3d4b2d" }}>
          Projets sur lesquels j'ai travaillé en autonomie durant ma formation Développeur Web
        </p>
      </Container>
      <Row className="justify-content-center pb-4">
      {projectsData.map((project, index) => (
        <Col key={index} xs={12} sm={6} md={4} className="mb-4">
          <Cards
            imgPath={images[project.imgPath]}
            title={project.title}
            description={project.description}
            ghLink={project.ghLink}
            demoLink={project.demoLink}
          />
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default Projects;
