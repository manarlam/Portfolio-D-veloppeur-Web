import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../card/Card";
import projectsData from "../../data/data.json";
import kasa from "../../assets/images/projects/kasa.png";
import bluel from "../../assets/images/projects/bluelcoub.PNG";
import booki from "../../assets/images/projects/booki.png";
import nina from "../../assets/images/projects/nina.PNG";
import grimoire from "../../assets/images/projects/grimoire.png";

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
          Projets sur lesquels j'ai travaillé en autonomie durant ma formation Développeur Web - Test
        </p>
      </Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projectsData.map((project, index) => (
          <Col md={4} className="project-card" key={index}>
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
