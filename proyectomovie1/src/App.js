import React from "react";
import Navbar from "./Componentes/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Consejos from "./paginas/Consejos";
import Herramientas from "./paginas/Herramientas";
import Conocenos from "./paginas/Conocenos";
import Contacto from "./paginas/Contacto";
import Recetario from "./PaginaReceta/Recetario";
import PreyCura from "./Componentes/PreyCura";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
  
    <header>
        
              <section>
             
        <BrowserRouter>
          <Navbar />
          <div className="container-fluid">
          <div className="row">
             <div className="col-lg-14 col-md-14 col-sm-12 col-10 offset-md-0 offset-sm-0 offset-0">
          <Routes>
            <Route path="/paginas/" element={<Inicio />} />
            <Route path="/paginas/Consejos" element={<Consejos />} />
            <Route path="/paginas/Herramientas" element={<Herramientas />} />
            <Route path="/paginas/Conocenos" element={<Conocenos />} />
            <Route path="/paginas/Contacto" element={<Contacto />} />
            <Route exact path="/PaginaReceta/Recetario" element={<Recetario/>} />
            <Route exact path="/Componentes/PreyCura" element={<PreyCura/>} />
            
          </Routes>
          </div>
            </div>
            </div>
        </BrowserRouter>
        
      </section>
      
      <Footer />
     
    </header>
    
  );
}

export default App;