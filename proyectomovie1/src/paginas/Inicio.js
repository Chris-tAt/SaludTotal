import React from 'react';
import './Inicio.css';
import Logo from "../Componentes/Logo.png";

const Inicio = () => {
  return (
    <div className="inicio-container">
      <h1 className="bienvenida">Bienvenido a Salud Total</h1>
      <p className="introduccion">
        En Salud Total, nos enfocamos en brindarte los mejores consejos y herramientas para mejorar tu salud de manera integral. Aquí encontrarás información sobre prevención de enfermedades comunes y graves, como enfermedades cardiovasculares, diabetes y cáncer. Además, abordaremos temas relacionados con la salud mental y te brindaremos consejos para cuidar tu apariencia física, como perder peso, mejorar la piel y mantener un estilo de vida activo y saludable.
      </p>
      <p className="frase-atraer">Únete a nosotros en esta aventura hacia una vida más saludable y descubre cómo puedes prevenir enfermedades y mejorar tu bienestar físico y mental.</p>
      <img src={Logo} alt="Logo Salud Total" className="logo" />
    </div>
  );
};

export default Inicio;