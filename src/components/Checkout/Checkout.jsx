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
        email: '',
        emailRepetido: ''
    })

    const [idPedido, setIdPedido] = useState(null);

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext)

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

        const subirPedido = (pedido) => {
            // Subir el pedido a Firebase - collection: "pedidos"
            const pedidosRef = collection(db, "pedidos")
            addDoc(pedidosRef, pedido)
                .then((respuesta) => {
                    setIdPedido(respuesta.id)
                    // Limpiar carrito
                    vaciarCarrito()
                })
                .catch((error) => console.log(error))
        }

        // Comparar que los mails sean iguales
        if (datosForm.email === datosForm.emailRepetido) {

            // Darle formato al pedido
            const pedido = {
                comprador: { ...datosForm },
                productos: [...carrito],
                fecha: new Date(),
                estado: 'En proceso',
                total: precioTotal()
            }
            subirPedido(pedido)
        }

        else {
            alert('Los campos de e-mail deben ser iguales')
            return
        }


    }

    return (
        <div className="p-10">
            <h1 className="title mb-10">Completar datos</h1>
            <div className="checkout">
                {idPedido ? (
                    <div className="orden">
                        <h2>¡Su pedido fue enviado con éxito!</h2>
                        <p>N° de pedido: {idPedido} </p>
                        <Link className="btn btn-primary" to="/">Ver más productos</Link>
                    </div>
                ) : (
                    <>
                        <FormCheckout
                            datosForm={datosForm}
                            guardarDatosInput={guardarDatosInput}
                            enviarForm={enviarForm}
                        />
                        <Link to="/carrito" className="btn btn-primary">Volver al carrito</Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default Checkout