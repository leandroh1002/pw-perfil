import React from 'react'
import styles from "./Formulario.module.css"

export default function Formulario() {
  return (
    <div className={styles.container}>
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label className={styles.focuswithin} for="name"><span>Nombre:</span></label>
            <input type="text" id="name" name="name" required placeholder='Ej. Leandro'/>
          </div>
          <div className={styles.formGroup}>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder='ejemplo@mail.com'/>
          </div>
          <div className={styles.formGroup}>
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required placeholder='Ingrese su mensaje'></textarea>
          </div>
          <div className={styles.styleButton}>
          <button type="submit">Enviar</button>
          </div>
        </form>
    </div>
  )
}