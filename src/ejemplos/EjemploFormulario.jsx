import React, { useState } from 'react'

const EjemploFormulario = () => {

    const [nombre, setNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [mail, setMail] = useState('')

    const cambiarNombre = (event) => {
        setNombre(event.target.value)
    }

    const cambiarDireccion = (event) => {
        setDireccion(event.target.value)
    }
    const cambiarMail = (event) => {
        setMail(event.target.value)
    }

    const enviarFormulario = (event) => {
        // Evitar refresh de la página al enviar
        event.preventDefault()
        // Crear objeto con la información enviada
        const usuario = { nombre, direccion, mail }
        console.log(usuario)
    }


    return (
        <form onSubmit={enviarFormulario}>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={cambiarNombre} />
            </label>

            <label>
                Dirección:
                <input type="text" value={direccion} onChange={cambiarDireccion} />
            </label>

            <label>
                Mail:
                <input type="email" value={mail} onChange={cambiarMail} />
            </label>

            <button type="submit">Enviar</button>

        </form>
    )
}

export default EjemploFormulario