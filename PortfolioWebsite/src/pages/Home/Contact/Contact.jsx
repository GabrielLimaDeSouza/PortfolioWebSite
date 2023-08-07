import React from 'react'

// Estilos
import contactStyles from './Contact.module.css'

// Componentes
import Form from '../../../components/Form/Form'

const Contact = () => {
  return (
    <div className="body white-body" id="contact">
        <div className='black-line'>
            <h1 className="title black-title">CONTATO</h1>
        </div>
        <div className={contactStyles.divContent}>
            <Form />
        </div>
    </div>
  )
}

export default Contact