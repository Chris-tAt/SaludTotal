import React from 'react'
import "./ModalLuz.css"

const ModalLuz = ({children, isOpen, closeModal}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}onClick={closeModal} >
      <div className='modal-container'>
        <button className='modal-close' onClick={closeModal}>X</button>
        {children}
      </div>

    </article>
  )
}
export default ModalLuz;
