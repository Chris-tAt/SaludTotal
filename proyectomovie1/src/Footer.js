import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="container-fluid">
     <div className="row d-flex justify-content-between align-items-center flex-wrap">
        <div className="col-md-12 col-sm-12 col-10 offset-md-0 offset-sm-0 offset-0" style={{minHeight: "150px"}}>
          <footer className="bg-orange py-1">
            <div className="container">
              <div className="row d-flex justify-content-between align-items-center flex-wrap">
                <div className="col-md-3">
                  <h4 className="mb-3">Nuestros Servicios</h4>
                  <ul className="list-unstyled mb-3">
                    <li>Consejeria Familiar</li>
                    <li>Consejeria Espiritual</li>
                    <li>Remedios Naturale</li>
                    <li>Terapias</li>
                    <li>Eventos y seminarios</li>
                    <li>y Mas</li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h4 className="mb-3">Contacto</h4>
                  <p className="mb-2">Dirección: por definir</p>
                  <p className="mb-2">Teléfono: por definir</p>
                  <p className="mb-0">Email: pordefinir@gmail.com</p>
                </div>
                <div className="col-md-3">
                  <h4 className="mb-2">Redes Sociales</h4>
                  <ul className="list-unstyled mb-4">
                    <li>
                      <a href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">Twitter</a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">Instagram</a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="my-3" />
        <p className="text-center mb-0">
          © 2023 Salud. Todos los derechos reservados.
        </p>
      </div>
    </footer>
    </div>
    </div>
    </div>
  );
}

export default Footer;