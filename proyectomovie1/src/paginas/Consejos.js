import React from "react";
import "./Consejos.css";
import ModalAgua from "../Componentes/CarModal/ModalAgua";
import ModalAire from "../Componentes/CarModal/ModalAire";
import ModalEjercicios from "../Componentes/CarModal/ModalEjercicios";
import ModalDormir from "../Componentes/CarModal/ModalDormir";
import ModalNutricion from "../Componentes/CarModal/ModalNutricion";
import ModalDios from "../Componentes/CarModal/ModalDios";
import ModalLuz from "../Componentes/CarModal/ModalLuz";
import ModalTemperancia from "../Componentes/CarModal/ModalTemperancia";
import agua from "../Componentes/images/agua.jpg";
import aire from "../Componentes/images/aire.jpg";
import ejercicio from "../Componentes/images/ejercicio.jpg";
import dormir from "../Componentes/images/dormir.jpg";
import nutricion from "../Componentes/images/nutricion.jpg";
import dios from "../Componentes/images/dios.jpg";
import luzsolar from "../Componentes/images/luzsolar.jpg";
import temperancia from "../Componentes/images/temperancia.jpg";
import { useModal } from "../HooksPerson/UseModalMenu";

const Consejos = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);
  const [isOpenModal4, openModal4, closeModal4] = useModal(false);
  const [isOpenModal5, openModal5, closeModal5] = useModal(false);
  const [isOpenModal6, openModal6, closeModal6] = useModal(false);
  const [isOpenModal7, openModal7, closeModal7] = useModal(false);
  const [isOpenModal8, openModal8, closeModal8] = useModal(false);
  return (
    <div>
      <h1 className="consejos-heading">Dale click en cada boton para que pueda conocer los consejos sobre los remedios naturales</h1>
      <div className="botones-consejos">
        <button onClick={openModal1}>Agua Pura</button>
        <button onClick={openModal2}>Aire Puro</button>
        <button onClick={openModal3}>Efercicio Fisico</button>
        <button onClick={openModal4}>Descanso correcto</button>
        <button onClick={openModal5}>Nutricion Ideal</button>
        <button onClick={openModal6}>Confianza en Dios</button>
        <button onClick={openModal7}>Luz Solar</button>
        <button onClick={openModal8}>Temperancia !</button>
      </div>

      <ModalAgua className="modal-agua" isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>modal 1</h3>
        <p> este es el contenido del modal 1</p>
        <img src={agua} alt="remedio agua" />
      </ModalAgua>
      <ModalAire isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Remedio de aire</h3>
        <p>Este es el contenido del remedio de aire.</p>
        <img src={aire} alt="Remedio de aire" />
      </ModalAire>
      <ModalEjercicios isOpen={isOpenModal3} closeModal={closeModal3}>
        <h3>Remedio de ejercicios</h3>
        <p>Este es el contenido del remedio de ejercicios.</p>
        <img src={ejercicio} alt="Remedio de Ejercicio" />
      </ModalEjercicios>

      <ModalDormir isOpen={isOpenModal4} closeModal={closeModal4}>
        <h3>Remedio de aire</h3>
        <p>Este es el contenido del remedio Dormir.</p>
        <img src={dormir} alt="Remedio de dormir" />
      </ModalDormir>

      <ModalNutricion isOpen={isOpenModal5} closeModal={closeModal5}>
        <h3>Remedio de aire</h3>
        <p>Este es el contenido del remedio de aire.</p>
        <img src={nutricion} alt="Remedio de nutricion" />
      </ModalNutricion>
      <ModalDios isOpen={isOpenModal6} closeModal={closeModal6}>
        <h3>Remedio de aire</h3>
        <p>Este es el contenido del remedio de aire.</p>
        <img src={dios} alt="Remedio de confianza en Dios" />
      </ModalDios>
      <ModalLuz isOpen={isOpenModal7} closeModal={closeModal7}>
        <h3>Remedio de aire</h3>
        <p>Este es el contenido del remedio de aire.</p>
        <img src={luzsolar} alt="Remedio de luz solar" />
      </ModalLuz>
      <ModalTemperancia isOpen={isOpenModal8} closeModal={closeModal8}>
        <h3>Remedio de aire</h3>
        <p>Este es el contenido del remedio de aire.</p>
        <img src={temperancia} alt="Remedio de Temperancia" />
      </ModalTemperancia>
    </div>
  );
};
export default Consejos;
