import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from "../components/about/About";
import homeLogo from "../assets/images/home_main.png";
import Type from "../components/type/Type";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/index.css";

function Home() {

  const location = useLocation();

    useEffect(() => {
      if (location.hash === "#about") {
        const el = document.getElementById("about");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [location]);


  return (
    <section>
      <Container fluid className="home-section wave-background" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello !
              </h1>
              <h1 className="heading-name">
                Je suis 
                <strong className="main-name"> Manar LAMRANI</strong>
              </h1>
              <div style={{ paddingLeft: 100, paddingTop: 40, textAlign: "left" }}>
              <Type />
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 40 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="about-section" id="about">
          <Row>
            <About />
          </Row>
        </Container>
    </section>
  );
}

export default Home;