import React, { useRef, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import emailjs from "emailjs-com";

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
  );
}

export default Contact;
