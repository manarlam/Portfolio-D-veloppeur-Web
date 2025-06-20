import React from 'react';
import { useEffect } from 'react';
import About from "./about";
import Image from "next/image";
import Type from "../components/type/Type";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

function Home() {

  const router = useRouter();

    useEffect(() => {
  if (router.asPath.includes("#about")) {
    const el = document.getElementById("about");
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 0); // Laisse le temps au DOM de se charger
    }
  }
}, [router.asPath]);


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
              <Image
                src="/images/home_main.png"
                alt="home pic"
                className="img-fluid"
                width={450}
                height={450}
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