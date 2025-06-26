import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

function Cards(props) {
  return (
    <Card className="project-card-view h-100">
      <div style={{ position: "relative", width: "100%", height: "200px" }}>
        <Image
          src={props.imgPath}
          alt="project image"
          layout="fill"
          objectFit="cover"
          className="card-img-top"
        />
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.skills && props.skills.length > 0 && (
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-2 mb-3">
            {props.skills.map((skill, idx) => (
              <span
                key={idx}
                 className="text-white rounded d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "#b0b988",
                  fontSize: "0.9rem",
                  padding: "0.4em 0.75em",
                  minHeight: "32px",
                  minWidth: "60px",
                  fontWeight: 500
                }}a
              >
                {skill}
              </span>
            ))}
          </div>
)}

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
