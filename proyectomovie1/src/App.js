import React from 'react';
import Navbar from './Componentes/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';
import Consejos from './paginas/Consejos';
import Herramientas from './paginas/Herramientas';
import Conocenos from './paginas/Conocenos';
import Contacto from './paginas/Contacto';
import Modales from './Componentes/Modales';

function  App () {
  return (
   <>
    <header>
      <section>
        <hr/>
        <div>
        <Navbar/>
        <Router>
        <Routes>
        <Route exact path="/paginas/" component={<Inicio/>}/>
        <Route exact path="/paginas/Consejos" component={<Consejos/>} />
        <Route exact path="/paginas/Herramientas" component={<Herramientas/>} />
        <Route exact path="/paginas/Conocenos" component={<Conocenos/>} />
        <Route exact path="/paginas/Contacto" component={<Contacto/>} />
        </Routes>
        </Router>
        </div>
       
      </section>
      <hr/>
    
    <hr/>
    
    </header>
    <Modales/>

   </>

  );
}

export default App;
