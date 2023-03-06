import React from 'react'
import { Link } from 'react-router-dom';
import FlushExample from './Accordion';
import styles from './PreyCura.module.css';


const PreyCura = () => {
  return (
    <>
   <Link to="/" className={styles.button}>
    <button className={styles.btn}>Volver a Herramientas</button>
    </Link>
    <FlushExample/>
    </>
    
  )
}
export default PreyCura