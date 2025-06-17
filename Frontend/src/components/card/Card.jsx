import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";


function Cards(props) {
  return (
  <Card className="project-card-view h-100">
  <Card.Img variant="top" src={props.imgPath} alt="card-img" />
  <Card.Body className="d-flex flex-column">
    <Card.Title>{props.title}</Card.Title>
    <Card.Text style={{ textAlign: "justify" }}>
      {props.description}
    </Card.Text>

    <div className="mt-auto">
      <Button variant="primary" href={props.ghLink} target="_blank">
        <BsGithub /> &nbsp;
        {props.isBlog ? "Blog" : "GitHub"}
      </Button>

      {!props.isBlog && props.demoLink && (
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
      )}
    </div>
    </Card.Body>
    </Card>
  );
}

export default Cards;