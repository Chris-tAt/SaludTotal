import React from "react";
import "./Inicio.css";
import Favicon from "../Componentes/Favicon.png";
import saludable from "../Componentes/images/saludable.jpg";
import comidas from "../Componentes/images/comidas.jpg";
import habitos from "../Componentes/images/habitos.jpg";

const Inicio = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-14 col-md-14 col-sm-12 col-10 offset-md-0 offset-sm-0 offset-0">
        <div className="inicio-contai">
          <h1 className="bienvenida">¡Bienvenido a Salud Total!</h1>
          <ul className="introduccion">
            <li>Consejos para prevenir enfermedades comunes y graves</li>
            <li>Cuidado de la salud mental y bienestar emocional</li>
            <li>
              Consejos para perder peso y mantener un estilo de vida saludable
            </li>
            <li>
              Información sobre enfermedades cardiovasculares, diabetes y cáncer
            </li>
            <li>Cuidado de la piel y el aspecto físico</li>
          </ul>
          <p className="frase-atraer">
            Únete a nosotros en esta aventura hacia una vida más saludable y
            descubre cómo puedes prevenir enfermedades y mejorar tu bienestar
            físico y mental.
          </p>
          <img src={Favicon} alt="Logo Salud Total" className="logo" />
          <div class="images-container">
            <img src={saludable} alt="pagina inicio" className="top-right" />
            <img src={habitos} alt="habitos inicio" className="top-left" />
            <img src={comidas} alt="comidas inicio" className="bottom-left" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Inicio;
