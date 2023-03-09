import React from "react";
import "./ModalTemperancia.css";

const ModalTemperancia = ({ children, isOpen, closeModal }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-14 col-md-14 col-sm-12 col-10 offset-md-0 offset-sm-0 offset-0">
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
    </div>
    </div>
    </div>
  );
};
export default ModalTemperancia;
