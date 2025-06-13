import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bluel from "../../assets/images/projects/bluelcoub.PNG"
import kasa from "../../assets/images/projects/kasa.PNG"
import booki from "../../assets/images/projects/booki.PNG"
import Cards from "../card/Card";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Projets scolaires
        </h1>
        <p style={{ color: "#3d4b2d" }}>
          Projets sur lesquels j'ai travaillé en autonomie durant ma formation Développeur Web
        </p>
      </Container>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <Cards
            imgPath={kasa}
            isBlog={false}
            title="Kasa - Agence Immobilière"
            description="Création d'un site web pour une agence immobilière avec React"
            ghLink="https://github.com/manarlam/Kasa_Agence_Immobiliere?tab=readme-ov-file"
            demoLink="https://manarlam.github.io/Kasa_Agence_Immobiliere/"
          />
        </Col>

        <Col md={4} className="project-card">
          <Cards
            imgPath={bluel}
            isBlog={false}
            title="Sophie Bluel - Architecte"
            description="Création d'un portfolio interactif avec Javascript en établissant une communication avec une API"
            ghLink="https://github.com/manarlam/Sophie_Bluel_Portfolio"
            demoLink=""
          />
        </Col>

         <Col md={4} className="project-card">
            <Cards
              imgPath={booki}
              isBlog={false}
              title="Booki - Agence de voyage"
              description="Développement d'un site web avec HTML et CSS"
              ghLink="https://github.com/manarlam/Project_Booki?tab=readme-ov-file"
              demoLink="https://manarlam.github.io/Project_Booki/"
            />
          </Col>

      </Row>
    </Container>
  );
}

export default Projects;