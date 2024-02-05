import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Carrito = () => {

    const { carrito, vaciarCarrito, eliminarProductoCarrito, precioTotal } = useContext(CartContext)

    if (carrito.length === 0) {
        return (
            <div className="w-[300px] mx-auto text-center py-10">
                <p className="mb-5">No hay productos en tu carrito</p>
                <Link to="/" className="btn btn-primary">Volver al incio</Link>
            </div>
        )
    }

    return (
        <div>
            <header className="grid gap-3 grid-cols-[110px_40%_auto_auto_auto_100px] border-b border-[#ccc] py-5 px-10">
                <div></div>
                <p>Producto</p>
                <p>Cantidad</p>
                <p>Precio unitario</p>
                <p>Subtotal</p>
                <p>Eliminar</p>
            </header>
            <ul>
                {carrito.map((producto) => (
                    <li key={producto.id} className="grid gap-3 grid-cols-[110px_40%_auto_auto_auto_100px] border-b border-[#ccc] py-5 px-10">
                        <img src={producto.foto} className="w-[100px]" />
                        <p>{producto.nombre} - Cantidad: {producto.cantidad}</p>
                        <p>{producto.cantidad}</p>
                        <p>${producto.precio}</p>
                        <p>${producto.precio * producto.cantidad}</p>
                        {/* Función anónima para que no se autoejecute: () => eliminarProductoCarrito(producto) */}
                        <button onClick={() => eliminarProductoCarrito(producto)} className="btn btn-secondary p-3">Eliminar producto</button>
                    </li>
                ))}

                <div className="flex content-between gap-5 mt-10 py-5 px-10">
                    <p className="grow">Precio total: ${precioTotal()},00</p>
                    <div className="flex gap-5">
                        <Link to="/checkout" className="w-[200px] btn btn-primary">Finalizar la compra</Link>
                        <button onClick={vaciarCarrito} className="w-[200px] btn btn-secondary">Vaciar Carrito</button>
                    </div>

                </div>
            </ul >
        </div >
    )
}

export default Carrito