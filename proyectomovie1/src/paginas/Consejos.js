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
import "bootstrap/dist/css/bootstrap.min.css";

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
    <>
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
      <div className="container-fluid">
      <div className="row">
        <div className="col-lg-14 col-md-14 col-sm-10 col-8 offset-md-0 offset-sm-0 offset-0">
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
          hidrataci??n, lo que ayuda a prevenir enfermedades como el
          estre??imiento, la deshidrataci??n y las infecciones del tracto
          urinario. Adem??s, el agua tambi??n puede ayudar a controlar el apetito
          y a mantener un peso saludable. Como dijo Leonardo da Vinci, "El agua
          es el veh??culo de la naturaleza".
        </p>
        <img src={agua} alt="remedio agua" />
      </ModalAgua>
      <ModalAire isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Remedio de aire</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>E</span>l aire es esencial para la
          respiraci??n y la oxigenaci??n del cuerpo. La calidad del aire que
          respiramos es importante para prevenir enfermedades respiratorias como
          el asma, la bronquitis y la neumon??a. Adem??s, la ventilaci??n adecuada
          y la circulaci??n del aire en espacios cerrados son esenciales para
          prevenir la propagaci??n de enfermedades contagiosas como el COVID-19.
          Seg??n la OMS, "La contaminaci??n del aire es el mayor riesgo ambiental
          para la salud en todo el mundo".
        </p>
        <img src={aire} alt="Remedio de aire" />
      </ModalAire>
      <ModalEjercicios isOpen={isOpenModal3} closeModal={closeModal3}>
        <h3>Remedio de ejercicios</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>E</span>l ejercicio regular es
          fundamental para mantener la salud y prevenir enfermedades cr??nicas
          como la obesidad, la diabetes y las enfermedades card??acas. El
          ejercicio tambi??n ayuda a mejorar la funci??n cerebral y a reducir el
          estr??s y la ansiedad. Como dijo Arist??teles, "La salud es la riqueza
          real y no piezas de oro y plata".
        </p>
        <img src={ejercicio} alt="Remedio de Ejercicio" />
      </ModalEjercicios>
      <ModalDormir isOpen={isOpenModal4} closeModal={closeModal4}>
        <h3>Remedio de Dormir</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>E</span>l sue??o es esencial para
          la recuperaci??n y el rejuvenecimiento del cuerpo. Una cantidad
          adecuada de sue??o ayuda a mantener un sistema inmunol??gico fuerte, a
          mejorar la memoria y la concentraci??n, y a prevenir enfermedades
          cr??nicas como la diabetes y las enfermedades card??acas. Seg??n un
          estudio de la Universidad de Harvard, "Dormir es tan importante como
          comer y respirar".
        </p>
        <img src={dormir} alt="Remedio de dormir" />
      </ModalDormir>
      <ModalNutricion isOpen={isOpenModal5} closeModal={closeModal5}>
        <h3>Remedio de Nutricion</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>U</span>na dieta equilibrada y
          saludable es esencial para prevenir enfermedades cr??nicas como la
          obesidad, la diabetes y las enfermedades card??acas. Es importante
          consumir una variedad de alimentos nutritivos, incluyendo frutas,
          verduras, prote??nas magras y grasas saludables..
        </p>
        <img src={nutricion} alt="Remedio de nutricion" />
      </ModalNutricion>
      <ModalDios isOpen={isOpenModal6} closeModal={closeModal6}>
        <h3>Remedio de Confianza en Dios</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>L</span>a confianza en Dios puede
          ayudar a reducir el estr??s y la ansiedad, y a mejorar la salud mental
          y emocional. Adem??s, la pr??ctica de la fe puede proporcionar una
          sensaci??n de prop??sito y significado en la vida, lo que puede tener
          efectos positivos en la salud y el bienestar..
        </p>
        <img src={dios} alt="Remedio de confianza en Dios" />
      </ModalDios>
      <ModalLuz isOpen={isOpenModal7} closeModal={closeModal7}>
        <h3>Remedio de la Luz Solar</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>L</span>a exposici??n a la luz
          solar puede ayudar al cuerpo a producir vitamina D, que es esencial
          para la salud ??sea y puede tener efectos beneficiosos en la prevenci??n
          de enfermedades cr??nicas como la diabetes y las enfermedades
          card??acas. Sin embargo, es importante tomar medidas para proteger la
          piel de la exposici??n excesiva al sol, como usar protector solar y
          evitar la exposici??n prolongada durante las horas pico del sol..
        </p>
        <img src={luzsolar} alt="Remedio de luz solar" />
      </ModalLuz>
      <ModalTemperancia isOpen={isOpenModal8} closeModal={closeModal8}>
        <h3>Remedio de Temperancia</h3>
        <p>
          <span style={{ fontSize: "1.5em" }}>L</span>a temperancia se refiere
          al autocontrol y la moderaci??n en la vida diaria. Esto puede incluir
          moderaci??n en el consumo de alimentos, bebidas alcoh??licas y tabaco,
          as?? como el equilibrio en el trabajo y el descanso. La pr??ctica de la
          temperancia puede ayudar a prevenir enfermedades cr??nicas como la
          diabetes, las enfermedades card??acas y el c??ncer..
        </p>
        <img src={temperancia} alt="Remedio de Temperancia" />
      </ModalTemperancia>
    </div>
    </div>
    </div>
    </>
  );
};
export default Consejos;
