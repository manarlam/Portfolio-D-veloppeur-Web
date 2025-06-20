import React, { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";
import Head from 'next/head';

function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_07wcmli", 
        "template_a1r75bh", 
        form.current,
        "CA10CpukR1wubV49X"   
      )
      .then(
        () => {
           setStatusMessage("Votre message a bien été envoyé.");
      setIsError(false);
      form.current.reset();
    },
    (error) => {
      setStatusMessage("Une erreur est survenue. Veuillez réessayer.");
      setIsError(true);
      console.error(error);
        }
      );
  };

  return (
    <>
      <Head>
        <title> Contact | Mon Portfolio</title>
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
    <section className="contact-section">
      <Container className="contact-form mt-5">
        <h2 className="mb-4">Me contacter</h2>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group controlId="formNom">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" name="nom" required />
          </Form.Group>

          <Form.Group controlId="formPrenom">
            <Form.Label>Prénom</Form.Label>
            <Form.Control type="text" name="prenom" required />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>

          <Form.Group controlId="formSujet">
            <Form.Label>Sujet</Form.Label>
            <Form.Control type="text" name="sujet" required />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" required />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            Envoyer
          </Button>
          {statusMessage && (
            <p style={{ color: isError ? "red" : "green", marginTop: "1rem" }}>
            {statusMessage}
          </p>
)}
        </Form>
      </Container>
    </section>
    </>
  );
}

export default Contact;
