import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import IconTrash from '../../assets/images/IconTrash'

const Carrito = () => {

    const { carrito, vaciarCarrito, eliminarProductoCarrito, precioTotal, formatoARS } = useContext(CartContext)

    if (carrito.length === 0) {
        return (
            <div className="container-general carrito text-center py-10">
                <p className="mb-5">No hay productos en tu carrito</p>
                <Link to="/" className="btn btn-primary">Volver al incio</Link>
            </div>
        )
    }

    return (
        <main className="container-general carrito">
            <header className="grid gap-3 grid-cols-[110px_auto_60px_120px_15%_15%_60px] bg-primary text-white font-montserrat font-[600] text-10px tracking-wider uppercase py-3 px-10">
                <div></div>
                <p>Producto</p>
                <p>Formato</p>
                <p className="text-center">Cantidad</p>
                <p className="text-right">Precio unitario</p>
                <p className="text-right pr-10">Subtotal</p>
                <p className="text-center">Eliminar</p>
            </header>
            <ul>
                {carrito.map((producto) => (
                    <li key={producto.id} className="grid items-center h-[100px] gap-3 grid-cols-[110px_auto_60px_120px_15%_15%_60px] border-b border-[#ccc] px-10">
                        <img src={producto.foto} className="h-[80px]" />
                        <p className="font-[600] leading-[1.1]">{producto.nombre}</p>
                        <p className="font-[600] leading-[1.1]">{producto.formato}</p>
                        <p className="font-montserrat text-14px text-center">{producto.cantidad}</p>
                        <p className="font-montserrat text-14px text-right pr-5">{formatoARS(producto.precio)}</p>
                        <p className="font-montserrat text-14px text-right pr-5">
                            <strong>{formatoARS(producto.precio * producto.cantidad)}</strong>
                        </p>
                        <div className="text-center">
                            {/* Función anónima para que no se autoejecute: () => eliminarProductoCarrito(producto) */}
                            <button onClick={() => eliminarProductoCarrito(producto)}>
                                <IconTrash height={24} className="mt-2.5" />
                            </button>
                        </div>
                    </li>
                ))}

                <div className="flex content-between gap-5 mt-10 py-5 px-10">
                    <button onClick={vaciarCarrito} className="w-[200px] btn btn-secondary">
                        <IconTrash height={14} className="mr-3" />
                        Vaciar Carrito</button>
                    <h2 className="grow text-right subtitle pr-2">Total: <strong className="font-montserrat text-black pl-2">{formatoARS(precioTotal())}</strong></h2>
                </div>

                <Link to="/checkout" className="w-[300px] h-[60px] !rounded-[30px] btn btn-primary !text-18px !font-[800] float-right">Finalizar la compra</Link>

            </ul>
        </main>
    )
}

export default Carrito