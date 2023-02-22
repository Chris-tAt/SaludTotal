import React from 'react'
import "./ModalAgua.css"

const ModalAgua = ({children, isOpen, closeModal}) => {
  return (
    <article className={`modal ${isOpen && "is-open"}`}onClick={closeModal} >
      <div className='modal-container'>
        <button className='modal-close' onClick={closeModal}>X</button>
        {children}
      </div>

    </article>
  )
}
export default ModalAgua;
