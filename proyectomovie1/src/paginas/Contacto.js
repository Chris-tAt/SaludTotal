import React, { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correoElectronico: "",
    asunto: "",
    mensaje: "",
    quieroQueMeLlamen: false,
    telefono: "",
  });
  const [touchedFields, setTouchedFields] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setTouchedFields({ ...touchedFields, [name]: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allFieldsTouched = Object.keys(formData).every(
      (fieldName) => touchedFields[fieldName]
    );
    if (allFieldsTouched) {
      // Aquí se puede enviar el formulario
      setIsSubmitted(true);
      setSuccess(true);
      setFormData({
        nombre: "",
        correoElectronico: "",
        asunto: "",
        mensaje: "",
        quieroQueMeLlamen: false,
        telefono: "",
      });
    } else {
      setError("Por favor complete todos los campos requeridos.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-14 col-md-14 col-sm-12 col-10 offset-md-0 offset-sm-0 offset-0">
          <div className="container">
            <h2 className="form-title">
              Si deseas Contactarnos puedes dejar un mensaje
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre" className="form-label">
                  Nombre:
                </label>
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
                <label htmlFor="correoElectronico" className="form-label">
                  Correo electrónico:
                </label>
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
                <label htmlFor="asunto" className="form-label">
                  Asunto:
                </label>
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
                <label htmlFor="mensaje" className="form-label">
                  Mensaje:
                </label>
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
                  <input
                    type="checkbox"
                    id="llamada"
                    name="llamada"
                    value="llamada"
                    className="form-checkbox"
                    checked={formData.quieroQueMeLlamen}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        quieroQueMeLlamen: event.target.checked,
                      })
                    }
                  />
                  <label htmlFor="llamada">Quiero que me llamen</label>
                </div>
                {formData.quieroQueMeLlamen && (
                  <div>
                    <label htmlFor="telefono" className="form-label">
                      Número de teléfono:
                    </label>
                    <input
                      type="text"
                      id="telefono"
                      name="telefono"
                      className="form-input"
                      value={formData.telefono}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>
              {error && <div className="error-message">{error}</div>}
              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Enviado" : "Enviar"}
              </button>
              {isSubmitted && (
                <div className="success-message">
                  Su mensaje ha sido enviado con éxito.
                </div>
              )}
              {success && (
                <div className="success-message">
                  Su mensaje ha sido enviado con éxito.
                </div>
              )}
              )
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
