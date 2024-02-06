import React, { useContext, useState } from 'react'
import FormCheckout from './FormCheckout'
import { CartContext } from '../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import db from "../../db/db"
import { Link } from 'react-router-dom'
import CarritoEnCheckout from './CarritoEnCheckout'

const Checkout = () => {

    const [datosForm, setDatosForm] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: '',
        emailRepetido: ''
    })

    const [formErrores, setFormErrores] = useState({
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
        // Evitar el refresh por defecto
        event.preventDefault()

        // Validación de todos los campos
        let errores = {}
        let esValido = true // Se usa "let" y no "const" porque cambia de valor

        if (datosForm.nombre === '') {
            errores.nombre = 'Nombre requerido'
            esValido = false
        }

        if (datosForm.direccion === '') {
            errores.direccion = 'Dirección requerida'
            esValido = false
        }

        if (datosForm.telefono === '') {
            errores.telefono = 'Teléfono requerido'
            esValido = false
        }

        if (datosForm.email === '') {
            errores.email = 'E-mail requerido'
            esValido = false
        }
        else {
            // Formato de mail válido
            const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!formatoEmail.test(datosForm.email)) {
                errores.email = 'E-mail inválido'
                esValido = false
            }
        }

        if (datosForm.emailRepetido === '') {
            errores.emailRepetido = 'Ingrese su e-mail nuevamente'
            esValido = false
        }
        else {
            // Que coincidan los dos mails
            if (datosForm.email != datosForm.emailRepetido) {
                errores.emailRepetido = 'El e-mail no coincide'
                esValido = false
            }
        }

        setFormErrores(errores)

        // Subir el pedido a Firebase - collection: "pedidos"
        const subirPedido = (pedido) => {
            const pedidosRef = collection(db, "pedidos")
            addDoc(pedidosRef, pedido)
                .then((respuesta) => {
                    setIdPedido(respuesta.id)
                    // Limpiar carrito
                    vaciarCarrito()
                })
                .catch((error) => console.log(error))
        }

        // Cehquear si los campos están validados antes de enviar el pedido
        if (esValido) {
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
    }

    return (
        <div className="flex gap-10 p-10">
            <div className="grow">
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
                                formErrores={formErrores}
                                enviarForm={enviarForm}
                            />

                        </>
                    )}
                </div>
            </div>

            {/* Carrito simplificado */}
            <div className="w-[500px]">
                <CarritoEnCheckout />

            </div>
        </div>
    )
}

export default Checkout