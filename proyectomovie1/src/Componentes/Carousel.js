import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css";
import estasi from "../Componentes/images/estasi.jpg";
import nutricion from "../Componentes/images/nutricion.jpg";

function Carrusel() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-14 col-md-14 col-sm-12 col-10 offset-md-0 offset-sm-0 offset-0">
    <div
      className="carrusel-containe"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Carousel interval={5000}>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={nutricion}
            alt="1Nutricion"
            style={{
              maxHeight: "800px",
              maxWidth: "800px",
              height: "60%",
              objectFit: "cover",
            }}
          />
          <Carousel.Caption>
            <h3>Somos "Quiero Vivir Sano"</h3>
            <p>
              La aplicacion que te brindará muchos beneficios para tu salud.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={estasi}
            alt="2Vivir"
            style={{
              maxHeight: "800px",
              maxWidth: "800px",
              height: "60%",
              objectFit: "cover",
            }}
          />

          <Carousel.Caption>
            <h3>Previene y curar Enfermedades</h3>
            <p>
              te brindamos multiples Herramientas para prevenir enfermedades.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={nutricion}
            alt="3Estasi"
            style={{
              maxHeight: "800px",
              maxWidth: "800px",
              height: "60%",
              objectFit: "cover",
            }}
          />

          <Carousel.Caption>
            <h3>Mejora tu apariencia fisica y tu estado emocional </h3>
            <p>
              Herramientas para determinar tu estado de salud y ademas poder
              ayudarte en tu estado de animo, todo esto es posible gracias a los
              remedios naturales
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Carrusel;
