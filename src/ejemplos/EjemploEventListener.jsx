import React, { useState, useEffect } from 'react'

const EventListenerEjemplo = () => {

    // EVENT LISTENER - ejemplo
    const [contador, setContador] = useState(1)
    useEffect(() => {
        const botonSumar = document.getElementById('btnSumar')
        const handleClick = () => {
            setContador(contador + 1)
        }
        // Evento + función:
        botonSumar.addEventListener('click', handleClick)

        // Esta función se ejecuta cuando se desmonta el componente
        return () => {
            botonSumar.removeEventListener('click', handleClick)
        }
    }, [contador])


    return (
        <>
            <p>{contador}</p>
            <button id="btnSumar">+</button>
        </>
    )
}

export default EventListenerEjemplo