import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import bluel from "../../assets/images/projects/bluelcoub.PNG"
import Cards from "../card/Card";

function Projects() {
  return (
    <Cards
    imgPath={bluel}/>
  );
}

export default Projects;