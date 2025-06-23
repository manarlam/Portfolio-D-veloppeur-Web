import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/card/Card";
import projectsData from "../data/data.json";
import kasa from "../public/images/projects/kasa.png";
import bluel from "../public/images/projects/bluelcoub.png";
import booki from "../public/images/projects/booki.png";
import nina from "../public/images/projects/nina.png";
import grimoire from "../public/images/projects/grimoire.png";
import Head from 'next/head';

const images = {
  kasa,
  bluel,
  booki,
  nina,
  grimoire,
};

function Projects() {
  return (
    <>
     <Head>
        <title> Projets | Mon Portfolio</title>
        <meta name="description" content="Portfolio de Manar Lamrani - Développeuse Web Full Stack" />
        <meta name="keywords" content="Développeur, React, Javascript, HTML, CSS, Node.js, Express, API Next.js, Manar Lamrani, Web" />
        <meta name="author" content="Manar Lamrani" />
        <meta property="og:title" content="Portfolio Manar Lamrani" />
        <meta property="og:description" content="Découvrez mon parcours et mes projets." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/portrait.png" />
        <meta property="og:url" content="https://manarlamrani.vercel.app/" />
        <meta name="robots" content="index, follow" />
      </Head>
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">Projets scolaires</h1>
        <p style={{ color: "#3d4b2d" }}className="project-content">
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
    </>
  );
}

export default Projects;
