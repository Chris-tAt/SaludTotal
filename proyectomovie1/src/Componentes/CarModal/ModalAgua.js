import React from "react";
import "./ModalAgua.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ModalAgua = ({ children, isOpen, closeModal }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-14 col-md-14 col-sm-10 col-8 offset-md-0 offset-sm-1 offset-1">
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
export default ModalAgua;
