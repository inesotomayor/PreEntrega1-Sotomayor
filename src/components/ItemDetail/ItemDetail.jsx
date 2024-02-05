import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ producto }) => {

    const [toggle, setToggle] = useState(false)

    const { carrito, anadirProductoCarrito } = useContext(CartContext)

    // Se recibe "cantidad" desde ItemCount
    const anadirProducto = (cantidad) => {
        setToggle(true)
        const productoCarrito = { ...producto, cantidad: cantidad }
        anadirProductoCarrito(productoCarrito)
    }

    return (
        <div className="flex gap-10 p-12">
            <div>
                <img src={producto.foto} className="w-[400px]" />
            </div>

            <div>
                {/* Categorías del producto con link a la categoría */}
                <p className="font-montserrat text-[9px] tracking-widest text-primary hover:text-black uppercase mb-5">
                    <Link to={`/categoria/${producto.categoria}`}>
                        {producto.categoria}
                    </Link>
                </p>
                <h3 className="text-22px leading-none mb-4">{producto.nombre} ({producto.ano})</h3>
                <p className="font-montserrat text-12px max-w-[450px] mb-3">{producto.descripcion}</p>
                <p className="font-montserrat text-12px mb-5">Autor del texto: <strong>{producto.autor}</strong>
                </p>
                <p className="mb-6">
                    <strong>${producto.precio},00</strong>
                </p>
                {toggle ? (
                    <div className="flex flex-col gap-5">
                        <Link to="/carrito" className="btn btn-primary">Ir al carrito</Link>
                        <Link to="/" className="btn btn-secondary">Seguir comprando</Link>
                    </div>
                ) : (
                    <ItemCount stock={producto.stock} anadirProducto={anadirProducto} />
                )}

            </div>

        </div >
    )
}
export default ItemDetail