import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='formContainer'>
            <div className='formTitle'>Dejanos tu consulta</div>

            <div className="form-floating mb-3">
                <input className="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" ></input>
                <label for="floatingTextareaDisabled">Nombre Completo</label>
            </div>

            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInputDisabled" placeholder="name@example.com" ></input>
                <label for="floatingInputDisabled">Correo Electrónico</label>
            </div>
            
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" ></textarea>
                <label for="floatingTextarea2Disabled">Consulta</label>
            </div>
            <button className='btn btn-lg btnForm'> Enviar Consulta </button>
        </div>

    )
}

export default Contact