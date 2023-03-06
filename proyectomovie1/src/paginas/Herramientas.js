import React from 'react';
import IMcorp from '../Componentes/IMcorp';
import { Link } from 'react-router-dom';
import './Herramientas.css';

const Herramientas = () => {
  return (
    <div className="contenedor">
      <h1 className="consejos-heading">
        Dale click en cada boton para que pueda conocer las herramientas para mejorar tu salud y tu estilo de vida
      </h1>
      <IMcorp/>
      <div className="botones">
        <Link to="/PaginaReceta/Recetario">
          <button className="prueba">Ver recetas</button>
        </Link>
        <Link to="/Componentes/PreyCura">
          <button className="prueba">Remedios Naturales</button>
        </Link>
      </div>
    </div>
  );
}
export default Herramientas;