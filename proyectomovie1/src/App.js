import React from "react";
import Navbar from "./Componentes/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Consejos from "./paginas/Consejos";
import Herramientas from "./paginas/Herramientas";
import Conocenos from "./paginas/Conocenos";
import Contacto from "./paginas/Contacto";

function App() {
  return (
    <header>
      <section>
        <hr />

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/paginas/" element={<Inicio />} />
            <Route path="/paginas/Consejos" element={<Consejos />} />
            <Route path="/paginas/Herramientas" element={<Herramientas />} />
            <Route path="/paginas/Conocenos" element={<Conocenos />} />
            <Route path="/paginas/Contacto" element={<Contacto />} />
          </Routes>
        </BrowserRouter>
      </section>
      
    </header>
  );
}
export default App;
