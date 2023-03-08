import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-orange mt-5 py-3" footer-Carrusel>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Nuestros Servicios</h4>
            <ul>
              <li>Consejeria Familiar</li>
              <li>Consejeria Espiritual</li>
              <li>Remedios Naturale</li>
              <li>Terapias</li>
              <li>Eventos y seminarios</li>
              <li>y Mas</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contacto</h4>
            <p>Dirección: por definir</p>
            <p>Teléfono: por definir</p>
            <p>Email: pordefinir@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h4>Redes Sociales</h4>
            <ul>
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
        <hr />
        <p className="text-center">
          © 2023 Salud. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
