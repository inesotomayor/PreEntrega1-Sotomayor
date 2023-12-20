import React, { useState, useEffect } from 'react'
import Titulo from './Titulo.jsx'

console.log("Se montó el componente")

const Contador = () => {

    console.log("Se actualizó el componente")

    const [contador, setContador] = useState(1)
    const [textoBoton, setTextoBoton] = useState('Texto botón')



    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const cambiarTextoBoton = () => {
        setTextoBoton('Un nuevo texto!')
    }

    // Se llama una sola vez al usar el useEffect
    // Sirve para llamar a APIs, suscripciones a eventListener
    useEffect(() => {
        // Llamada a una API

        // const fetchApi = () => {
        //     fetch("https://fakestoreapi.com/products")
        //         // Guardar el resultado en un JSON - "response" puede ser cualquier palabra
        //         .then((response) => {
        //             return response.json()
        //         })
        //         // Mostrar resultado - "data" puede ser cualquier palabra
        //         .then((data) => console.log(data))
        // }
        // fetchApi()
    }, [])


    const [toggle, setToggle] = useState(true)
    const alternarToggle = () => {
        // Manera rápida de alternar entre los dos valores de toggle
        setToggle(!toggle)
    }

    // USOS DE USE EFFECT
    // Sólo al montar
    useEffect(() => {
        console.log("1º useEffect")
    }, [])

    // Sólo al cambiar la variable de estado (useState) "contador"
    useEffect(() => {
        console.log("2º useEffect - contador")
    }, [contador])

    // En cualquier cambio estado de todas las variables
    useEffect(() => {
        console.log("3º useEffect - todos")
    })



    return (
        <div className="d-flex flex-column gap-4">
            <div className="border py-4">
                <h1>{toggle.toString()}</h1>
                <button onClick={alternarToggle} className="btn btn-primary">Alternar toggle</button>
            </div>

            <div className="border py-4">
                <h1>Número: {contador}</h1>
                <button onClick={sumar} className="btn btn-primary me-2">Sumar</button>
                <button onClick={restar} className="btn btn-secondary">Restar</button>
                <button onClick={cambiarTextoBoton} className="btn btn-secondary">{textoBoton}</button>
                <button onClick={() => setTextoBoton('Otro texto!')} className="btn btn-secondary">{textoBoton}</button>
            </div>

            <div className="border py-4">
                <Titulo />
            </div>
        </div>
    )
}

export default Contador