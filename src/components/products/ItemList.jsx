import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'

const ItemList = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const fetchProductos = () => {
            setTimeout(() => {
                // Lista de productos:
                const listaProductos = [
                    {
                        id: 1,
                        nombre: "To all creatures (2022)",
                        precio: "$85.000,00",
                        foto: 'https://static.wixstatic.com/media/bcfe66_25e5d8b24f6a4412b1add7555acae020~mv2_d_2175_1575_s_2.jpg/v1/fill/w_747,h_536,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bcfe66_25e5d8b24f6a4412b1add7555acae020~mv2_d_2175_1575_s_2.jpg',
                        descripcion: '30 x 40 cms. - Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos y estilógrafo',
                        stock: 1
                    },
                    { id: 2, nombre: "Producto B", precio: "$120.000,00", stock: 2 },
                    { id: 3, nombre: "Producto C", precio: "$90.000,00", stock: 4 },
                    { id: 4, nombre: "Producto D", precio: "$110.000,00", stock: 3 },
                    { id: 5, nombre: "Producto E", precio: "$80.000,00", stock: 5 },
                    { id: 6, nombre: "Producto F", precio: "$100.000,00", stock: 1 },
                    { id: 7, nombre: "Producto G", precio: "$150.000,00", stock: 1 },
                    { id: 8, nombre: "Producto H", precio: "$90.000,00", stock: 4 },
                ]
                setProductos(listaProductos)
            }, 2000) // Delay de 2 segundos para simular carga
        }
        fetchProductos()
    }, []) // Array vacío para que cargue una sola vez

    return (
        <ul className="w-full px-20 grid grid-cols-4 gap-10">
            {productos.map((producto) =>
                <li key={producto.id} className="border p-10">
                    <img src={producto.foto} className="w-full mb-4" />
                    <h3 className="text-22px">{producto.nombre}</h3>
                    <p className="font-montserrat text-12px">{producto.descripcion}</p>
                    <p><strong>{producto.precio}</strong></p>
                    <ItemCount stock={producto.stock} />
                </li>
            )}
        </ul>
    )
}

export default ItemList