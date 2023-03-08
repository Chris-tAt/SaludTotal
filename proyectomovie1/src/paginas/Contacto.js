import React from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacto.css";

function Contacto() {
  return (
    <div className="contacto-container">
      <h2>Escriba un mensaje y nos comunicaremos con usted </h2>
      <div className="container">
        <h2>Contacto</h2>
        <div className="row">
          <div className="col-md-6 mt-4">
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                />
              </Form.Group>

              <Form.Group controlId="formBasicSubject">
                <Form.Label>Asunto</Form.Label>
                <Form.Control type="text" placeholder="Ingrese el asunto" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Ingrese su mensaje"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
