import React from 'react'

// Estilos
import styles from './Form.module.css'

const Form = () => {

  return (
    <form action="https://formspree.io/f/mqkvelyb" className={styles.divForm} method='POST'>
        <textarea type="text" name="name" id="inputName" className={styles.inputName} placeholder="Nome" required />
        <textarea type="email" name="email" id="inputEmail" className={styles.inputEmail} placeholder='Email' required />
        <textarea type="text" name="message" id="inputMessage" className={styles.inputMessage} placeholder='Mensagem' required />
        <input type="hidden" name="_language" value="pt-BR" />
        <button type="submit" className={styles.btnSubmit}>Enviar Mensagem</button>
    </form>
  )
}

export default Form