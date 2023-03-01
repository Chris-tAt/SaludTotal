import React, { useState, useEffect } from "react";
import './Recetario.css';
import BarraBusque from './BarraBusque';
import TarjetaRece from './TarjetaRece';
import { Link } from 'react-router-dom';


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function Recetario() {
    const [isCarga, setIsCarga] = useState(false);
    const [query, setQuery] = useState("");
    const [recetas, setRecetas] = useState([]);

    const searcRecetas = async () => {
        setIsCarga(true);
        const url = apiUrl + query;
        const res = await fetch(url);
        const data = await res.json();
        setRecetas (data.meals);
        setIsCarga(false);
    };
    useEffect(() => {
        searcRecetas();
    }, []);

    const handleSubmit = event => {
        event.preventDefault()
        searcRecetas()
    };
    return (
        <div className='contenedor'>
          <h2> Recetas para mejorar tu salud</h2>
          <Link to="/">
            <button>Volver a Herramientas</button>
          </Link>
          <BarraBusque
          handleSubmit={handleSubmit}
          value={query}
          onChange={event => setQuery(event.target.value)}
          isCarga={isCarga}
          />
          <div className="recetario">
            {recetas ? recetas.map(receta => (
              <TarjetaRece
                key={receta.idMeal}
                receta={receta}/>
            )) : "¡No hay Recetario!"}
          </div>
        </div>
      )
    }
export default Recetario;
