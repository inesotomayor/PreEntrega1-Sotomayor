import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import IconTrash from '../../assets/images/IconTrash'

const Carrito = () => {

    const { carrito, vaciarCarrito, eliminarProductoCarrito, precioTotal, formatoARS } = useContext(CartContext)

    if (carrito.length === 0) {
        return (
            <div className="container-general carrito text-center py-10">
                <p className="mb-8">El carrito está vacío</p>
                <Link to="/" className="btn btn-primary w-[250px] mx-auto">Volver al incio</Link>
            </div>
        )
    }

    return (
        <main className="container-general carrito pb-[100px]">
            <div className="flex items-center justify-between mb-10">
                <h1 className="subtitle">Carrito</h1>
                <Link to="/checkout" className="btn btn-primary !font-[800] md:w-[300px] md:h-[60px] md:!rounded-[30px] md:!text-18px float-right">Finalizar la compra</Link>
            </div>

            <header className="grid gap-3 
            grid-cols-[40px_auto_40px_30px_15%_15%_40px] 
            md:grid-cols-[110px_auto_60px_120px_15%_15%_60px] 
            bg-primary text-white font-montserrat font-[600] text-[8px] md:text-10px tracking-wider uppercase py-3">
                <div></div>
                <p>Producto</p>
                <p>Formato</p>
                <p className="text-center">Cant<span className="hidden md:inline-block">idad</span></p>
                <p className="text-right">Precio <span className="hidden md:inline-block">unitario</span></p>
                <p className="text-right pr-10">Subtotal</p>
                <p></p>
            </header>
            <ul>
                {carrito.map((producto) => (
                    <li key={producto.id} className="grid items-center h-[100px] gap-3 
                    grid-cols-[40px_auto_40px_30px_15%_15%_40px] 
                    md:grid-cols-[110px_auto_60px_120px_15%_15%_60px] 
                    border-b border-[#ededed] text-14px md:text-18px">
                        <img src={producto.foto} className="w-[40px] md:w-[80px]" />
                        <p className="font-[600] leading-none md:leading-[1.1]">{producto.nombre}</p>
                        <p className="font-montserrat leading-none md:leading-[1.1] text-11px md:text-14px">{producto.formato}</p>
                        <p className="font-montserrat text-11px md:text-14px text-center">{producto.cantidad}</p>
                        <p className="font-montserrat text-11px md:text-14px text-right pr-5">{formatoARS(producto.precio)}</p>
                        <p className="font-montserrat text-11px md:text-14px text-right pr-5">
                            <strong>{formatoARS(producto.precio * producto.cantidad)}</strong>
                        </p>
                        <div className="text-center">
                            {/* Función anónima para que no se autoejecute: () => eliminarProductoCarrito(producto) */}
                            <button onClick={() => eliminarProductoCarrito(producto)}>
                                <IconTrash className="mt-2.5 h-[18px] md:h-[24px]" />
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

                <Link to="/checkout" className="btn btn-primary !font-[800] md:w-[300px] md:h-[60px] md:!rounded-[30px] md:!text-18px float-right">Finalizar la compra</Link>

            </ul>
        </main>
    )
}

export default Carrito