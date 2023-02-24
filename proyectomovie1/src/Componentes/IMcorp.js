import React, { useState } from "react";

function IMcorp() {
  const [isIMcorpVisible, setIsIMcorpVisible] = useState(false);
  const [sexo, setSexo] = useState("");
  const [peso, setPeso] = useState("");
  const [estatura, setEstatura] = useState("");
  const [isEstaturaValid, setIsEstaturaValid] = useState(true);
  const [imcResult, setImcResult] = useState("");
  const [imcClassification, setImcClassification] = useState("");
  const handleIMCorpClick = () => {
    setIsIMcorpVisible(!isIMcorpVisible);
  };

  const handleSexoChange = (e) => {
    setSexo(e.target.value);
  };

  const handlePesoChange = (e) => {
    const peso = e.target.value;
    if (isNaN(peso)) {
      alert(
        "Estos campos solo son numéricos. Para escribir un número decimal solo debe escribirlo con ',' y no con '.' (Ejemplo: 1,70)."
      );
    } else {
      setPeso(peso);
    }
  };

  const handleEstaturaChange = (e) => {
    const altura = e.target.value.replace(",", ".");
    if (/^\d+(,\d+)?(\.\d+)?$/.test(altura)) {
      setEstatura(parseFloat(altura));
      setIsEstaturaValid(true);
    } else {
      setIsEstaturaValid(false);
    }
  };

  const handleIMCorpSubmit = (e) => {
    e.preventDefault();
    const estaturaCuadrado = Math.pow(parseFloat(estatura), 2);
    const imc = parseFloat(peso) / estaturaCuadrado;
    if (typeof imc === "number") {
      setImcResult(imc.toFixed(2));
    }

    if (imc < 20) {
      setImcClassification(
        "Tienes bajo peso; ten cuidado puedes estar desnutrido te recomiendo ir a un médico y seguir la herramienta de recetas para subir de peso"
      );
    } else if (imc >= 20 && imc < 25 && sexo === "masculino") {
      setImcClassification(
        "Tu índice de masa muscular es normal tienes un peso ideal a tu estatura"
      );
    } else if (imc >= 20 && imc < 24 && sexo === "femenino") {
      setImcClassification(
        "Tu índice de masa muscular es normal tienes un peso ideal a tu estatura"
      );
    } else if (imc >= 25 && imc < 30 && sexo === "masculino") {
      setImcClassification(
        "Tienes una obesidad leve, sigue los entrenamientos de ejercicios que se encuentra en la sesión de herramienta para poder llegar a tu peso ideal"
      );
    } else if (imc >= 24 && imc < 29 && sexo === "femenino") {
      setImcClassification(
        "Tienes una obesidad leve, sigue los entrenamientos de ejercicios que se encuentra en la sesión de herramienta para poder llegar a tu peso ideal"
      );
    } else if (imc >= 30 && imc < 40 && sexo === "masculino") {
      setImcClassification(
        "Cuidado tienes una obesidad severa, eso puede traer graves daños a tu salud, te recomiendo ir a tu médico, una dieta ideal y una rutina de ejercicios que te recomendamos en el área de herramientas"
      );
    } else if (imc >= 29 && imc < 37 && sexo === "femenino") {
      setImcClassification(
        "Cuidado tienes una obesidad severa, eso puede traer graves daños a tu salud, te recomiendo ir a tu médico, una dieta ideal y una rutina de ejercicios que te recomendamos en el área de herramientas"
      );
    } else if (imc >= 40) {
      setImcClassification(
        "Tu índice de masa muscular es fuera de los rangos saludables, consulta a un médico para evaluar tu estado de salud"
      );
    }
  };

  return (
    <div className="IMcorp">
      <button onClick={handleIMCorpClick}>
        Calcula tu índice de masa muscular
      </button>
      {isIMcorpVisible && (
        <form onSubmit={handleIMCorpSubmit}>
          <div className="input-container">
            <label>Sexo:</label>
            <select value={sexo} onChange={handleSexoChange}>
              <option value="">Selecciona una opción</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
            </select>
          </div>
          <div className="input-container">
            <label>Peso (kg):</label>
            <input type="number" value={peso} onChange={handlePesoChange} />
          </div>
          <div className="input-container">
            <label>Estatura (m):</label>
            <input
              type="number"
              step="0.01"
              value={estatura}
              onChange={handleEstaturaChange}
            />
            {!isEstaturaValid && (
              <p className="error-message">
                Ingresa una estatura válida (ejemplo: 1.75)
              </p>
            )}
          </div>
          <button type="submit">Calcular</button>
          {imcResult && (
            <div className="imc-result">
              <p>Tu índice de masa muscular es: {imcResult}</p>
              <p>{imcClassification}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default IMcorp;
