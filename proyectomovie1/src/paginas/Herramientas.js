import React from 'react'
import IMcorp from '../Componentes/IMcorp';
import { Link } from 'react-router-dom';

const Herramientas = () => {

  return (
    <div>
      <IMcorp />
      <Link to="/PaginaReceta/Recetario">
      <button>Ver recetas</button>
    </Link>
    </div>
   
  )
}
export default Herramientas;