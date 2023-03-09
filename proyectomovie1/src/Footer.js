import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-orange py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className="mb-3">Nuestros Servicios</h4>
            <ul className="list-unstyled mb-4">
              <li>Consejeria Familiar</li>
              <li>Consejeria Espiritual</li>
              <li>Remedios Naturale</li>
              <li>Terapias</li>
              <li>Eventos y seminarios</li>
              <li>y Mas</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4 className="mb-3">Contacto</h4>
            <p className="mb-2">Dirección: por definir</p>
            <p className="mb-2">Teléfono: por definir</p>
            <p className="mb-0">Email: pordefinir@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h4 className="mb-3">Redes Sociales</h4>
            <ul className="list-unstyled mb-4">
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center mb-0">
          © 2023 Salud. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;