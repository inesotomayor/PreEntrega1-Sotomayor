import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CarritoEnCheckout = () => {

    const { carrito, formatoARS, precioTotal } = useContext(CartContext)

    if (carrito.length !== 0) {
        return (
            <div>
                <header className="grid gap-3 grid-cols-[50px_25%_60px_100px_auto] py-5 px-6 bg-primary text-white font-montserrat font-[600] text-[8px] md:text-10px tracking-wider uppercase">
                    <div></div>
                    <p>Producto</p>
                    <p className="text-center">Cant.</p>
                    <p className="text-center">Precio</p>
                    <p className="text-center">Subtotal</p>
                </header>
                <ul>
                    {carrito.map((producto) => (
                        <li key={producto.id} className="grid gap-3 grid-cols-[50px_25%_60px_100px_auto] items-center text-14px md:text-18px border-b border-[#ededed] py-5 px-6">
                            <img src={producto.foto} className="w-[40px]" />
                            <p className="font-[600] leading-none md:leading-[1.1]">{producto.nombre}</p>
                            <p className="font-montserrat text-11px md:text-14px text-center">{producto.cantidad}</p>
                            <p className="font-montserrat text-11px md:text-14px text-right pr-5">{formatoARS(producto.precio)}</p>
                            <p className="font-montserrat text-11px md:text-14px text-right pr-5">
                                <strong>{formatoARS(producto.precio * producto.cantidad)}</strong>
                            </p>
                        </li>
                    ))}

                    <div className="flex content-between gap-5 mt-10 p-5">
                        <Link to="/carrito" className="btn btn-primary">Editar carrito</Link>
                        <h2 className="grow text-right subtitle pr-4">Total:
                            <strong className="font-montserrat text-black pl-2">{formatoARS(precioTotal())}</strong>
                        </h2>
                    </div>
                </ul>
            </div>
        )
    }
}

export default CarritoEnCheckout