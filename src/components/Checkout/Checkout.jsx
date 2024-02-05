import React, { useContext, useState } from 'react'
import FormCheckout from './FormCheckout'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import db from "../../db/db"
import { Link } from 'react-router-dom'

const Checkout = () => {

    const [datosForm, setDatosForm] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: ''
    })

    const { carrito, precioTotal } = useContext(CartContext)

    const guardarDatosInput = (event) => {
        // Lo que se tipea: (event.target.value)
        // Name del input editado: (event.target.name)

        // Modifica "nombre: event.target.value", sumando las letras tipeadas
        // setDatosForm({ ...datosForm, "nombre": event.target.value }) ---> Así no porque debería ser dinámico de todos los inputs
        setDatosForm({ ...datosForm, [event.target.name]: event.target.value })

    }

    const enviarForm = (event) => {
        // Evitar la recarga por defecto
        event.preventDefault()

        // Darle formato al pedido
        const pedido = {
            comprador: { ...datosForm },
            productos: [...carrito],
            total: precioTotal()
        }

        // Subir el pedido a Firebase - collection: pedidos
        const pedidosRef = collection(db, "pedidos")
        addDoc(pedidosRef, pedido)
            .then((respuesta) => console.log(respuesta))
            .catch((error) => console.log(error))

    }

    return (
        <>
            <h1 className="mb-10">Checkout:</h1>
            <FormCheckout
                datosForm={datosForm}
                guardarDatosInput={guardarDatosInput}
                enviarForm={enviarForm}
            />
            <Link to="/carrito" className="btn btn-primary">Volver al carrito</Link>
        </>
    )
}

export default Checkout