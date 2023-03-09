import React from "react";
import { Link } from "react-router-dom";
import FlushExample from "./Accordion";
import styles from "./PreyCura.module.css";

const PreyCura = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-14 col-md-14 col-sm-12 col-10 offset-md-0 offset-sm-0 offset-0">
      <Link to="/paginas/Herramientas" className={styles.button}>
        <button className={styles.btn}>Volver a Herramientas</button>
      </Link>
      <FlushExample />
    </div>
    </div>
    </div>
  );
};
export default PreyCura;
