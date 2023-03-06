import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Nuestros Servicios</h4>
            <ul>
              <li>Consulta Médica</li>
              <li>Exámenes Médicos</li>
              <li>Cirugías</li>
              <li>Terapias</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contacto</h4>
            <p>Dirección: 123 Calle Principal</p>
            <p>Teléfono: 555-1234</p>
            <p>Email: info@salud.com</p>
          </div>
          <div className="col-md-4">
            <h4>Redes Sociales</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">© 2023 Salud. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
