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
      <h1 className="consejos-heading">
        Dale click en cada boton para que pueda conocer los consejos sobre los
        remedios naturales
      </h1>
      <div className="botones-consejos">
        <button className="prueba" onClick={openModal1}>
          Agua Pura
        </button>
        <button className="prueba" onClick={openModal2}>
          Aire Puro
        </button>
        <button className="prueba" onClick={openModal3}>
          Efercicio Fisico
        </button>
        <button className="prueba" onClick={openModal4}>
          Descanso correcto
        </button>
        <button className="prueba" onClick={openModal5}>
          Nutricion Ideal
        </button>
        <button className="prueba" onClick={openModal6}>
          Confianza en Dios
        </button>
        <button className="prueba" onClick={openModal7}>
          Luz Solar
        </button>
        <button className="prueba" onClick={openModal8}>
          Temperancia !
        </button>
      </div>

      <ModalAgua
        className="modal-agua"
        isOpen={isOpenModal1}
        closeModal={closeModal1}
      >
        <h3>Remedio del Agua</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>E</span>l agua es esencial para la
          vida y es necesaria para el correcto funcionamiento del cuerpo humano.
          Es importante consumir la cantidad adecuada de agua para mantener la
          hidratación, lo que ayuda a prevenir enfermedades como el
          estreñimiento, la deshidratación y las infecciones del tracto
          urinario. Además, el agua también puede ayudar a controlar el apetito
          y a mantener un peso saludable. Como dijo Leonardo da Vinci, "El agua
          es el vehículo de la naturaleza".
        </p>
        <img src={agua} alt="remedio agua" />
      </ModalAgua>
      <ModalAire isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Remedio de aire</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>E</span>l aire es esencial para la
          respiración y la oxigenación del cuerpo. La calidad del aire que
          respiramos es importante para prevenir enfermedades respiratorias como
          el asma, la bronquitis y la neumonía. Además, la ventilación adecuada
          y la circulación del aire en espacios cerrados son esenciales para
          prevenir la propagación de enfermedades contagiosas como el COVID-19.
          Según la OMS, "La contaminación del aire es el mayor riesgo ambiental
          para la salud en todo el mundo".
        </p>
        <img src={aire} alt="Remedio de aire" />
      </ModalAire>
      <ModalEjercicios isOpen={isOpenModal3} closeModal={closeModal3}>
        <h3>Remedio de ejercicios</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>E</span>l ejercicio regular es
          fundamental para mantener la salud y prevenir enfermedades crónicas
          como la obesidad, la diabetes y las enfermedades cardíacas. El
          ejercicio también ayuda a mejorar la función cerebral y a reducir el
          estrés y la ansiedad. Como dijo Aristóteles, "La salud es la riqueza
          real y no piezas de oro y plata".
        </p>
        <img src={ejercicio} alt="Remedio de Ejercicio" />
      </ModalEjercicios>
      <ModalDormir isOpen={isOpenModal4} closeModal={closeModal4}>
        <h3>Remedio de Dormir</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>E</span>l sueño es esencial para
          la recuperación y el rejuvenecimiento del cuerpo. Una cantidad
          adecuada de sueño ayuda a mantener un sistema inmunológico fuerte, a
          mejorar la memoria y la concentración, y a prevenir enfermedades
          crónicas como la diabetes y las enfermedades cardíacas. Según un
          estudio de la Universidad de Harvard, "Dormir es tan importante como
          comer y respirar".
        </p>
        <img src={dormir} alt="Remedio de dormir" />
      </ModalDormir>
      <ModalNutricion isOpen={isOpenModal5} closeModal={closeModal5}>
        <h3>Remedio de Nutricion</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>U</span>na dieta equilibrada y
          saludable es esencial para prevenir enfermedades crónicas como la
          obesidad, la diabetes y las enfermedades cardíacas. Es importante
          consumir una variedad de alimentos nutritivos, incluyendo frutas,
          verduras, proteínas magras y grasas saludables..
        </p>
        <img src={nutricion} alt="Remedio de nutricion" />
      </ModalNutricion>
      <ModalDios isOpen={isOpenModal6} closeModal={closeModal6}>
        <h3>Remedio de Confianza en Dios</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>L</span>a confianza en Dios puede
          ayudar a reducir el estrés y la ansiedad, y a mejorar la salud mental
          y emocional. Además, la práctica de la fe puede proporcionar una
          sensación de propósito y significado en la vida, lo que puede tener
          efectos positivos en la salud y el bienestar..
        </p>
        <img src={dios} alt="Remedio de confianza en Dios" />
      </ModalDios>
      <ModalLuz isOpen={isOpenModal7} closeModal={closeModal7}>
        <h3>Remedio de la Luz Solar</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>L</span>a exposición a la luz
          solar puede ayudar al cuerpo a producir vitamina D, que es esencial
          para la salud ósea y puede tener efectos beneficiosos en la prevención
          de enfermedades crónicas como la diabetes y las enfermedades
          cardíacas. Sin embargo, es importante tomar medidas para proteger la
          piel de la exposición excesiva al sol, como usar protector solar y
          evitar la exposición prolongada durante las horas pico del sol..
        </p>
        <img src={luzsolar} alt="Remedio de luz solar" />
      </ModalLuz>
      <ModalTemperancia isOpen={isOpenModal8} closeModal={closeModal8}>
        <h3>Remedio de Temperancia</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>L</span>a temperancia se refiere
          al autocontrol y la moderación en la vida diaria. Esto puede incluir
          moderación en el consumo de alimentos, bebidas alcohólicas y tabaco,
          así como el equilibrio en el trabajo y el descanso. La práctica de la
          temperancia puede ayudar a prevenir enfermedades crónicas como la
          diabetes, las enfermedades cardíacas y el cáncer..
        </p>
        <img src={temperancia} alt="Remedio de Temperancia" />
      </ModalTemperancia>
    </div>
  );
};
export default Consejos;
