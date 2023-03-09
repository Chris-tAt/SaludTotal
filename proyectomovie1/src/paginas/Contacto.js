import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correoElectronico: "",
    asunto: "",
    mensaje: "",
    quieroQueMeLlamen: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
    <h2 className="form-title">Si deseas Contactarnos puedes dejar un mensaje</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="correoElectronico" className="form-label">Correo electrónico:</label>
          <input
            type="email"
            id="correoElectronico"
            name="correoElectronico"
            value={formData.correoElectronico}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="asunto" className="form-label">Asunto:</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje" className="form-label">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleInputChange}
            className="form-textarea"
          />
        </div>
        <div className="form-group">
          <div>
            <input type="checkbox" id="llamada" name="llamada" value="llamada" className="form-checkbox" />
            <label htmlFor="llamada">Quiero que me llamen</label>
          </div>
          <div>
            <label htmlFor="telefono" className="form-label">Número de teléfono:</label>
            <input type="text" id="telefono" name="telefono" className="form-input" />
          </div>

          <label htmlFor="quieroQueMeLlamen" className="form-label">Quiero que me llamen</label>
        </div>
        <button type="submit" className="form-submit">Enviar</button>
      </form>
      <h2 className="form-title">Gracias por llenar el pronto estaremos respondiendo a tus dudas.</h2>
    </div>
  );
};

export default Contacto;
