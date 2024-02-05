import React, { useState } from 'react'

const ItemCount = ({ stock, anadirProducto }) => {

    const [cantidad, setCantidad] = useState(1)

    const sumar = () => {
        // if (cantidad < stock) {setCantidad(cantidad + 1)} es igual a:
        cantidad < stock && setCantidad(cantidad + 1)
    }
    const restar = () => {
        // if (cantidad > 0) {setCantidad(cantidad - 1)} es igual a:
        cantidad > 0 && setCantidad(cantidad - 1)
    }

    const esCero = cantidad === 0
    const excedeStock = cantidad >= stock

    return (
        <>
            <div className="text-center">
                <div className="flex-centered gap-1 pb-5">

                    {/* Restar hasta 0 */}
                    <button onClick={restar} className={`btn !text-30px h-[40px] w-[40px]
                    ${esCero ? 'disabled' : 'btn-primary'}`}>
                        <span className="inline-block -mt-1.5">-</span>
                    </button>

                    <p className="flex-centered w-[80px] !text-24px">
                        <strong>{cantidad}</strong>
                    </p>

                    {/* Sumar hasta stock */}
                    <button onClick={sumar} className={`btn px-4 !text-30px h-[40px] w-[40px]
                    ${excedeStock ? 'disabled' : 'btn-primary'}`}>
                        <span>+</span>
                    </button>
                </div>

                {/* Función anónima para que no se autoejecute: () => anadirProducto(cantidad) */}
                <button onClick={() => anadirProducto(cantidad)}
                    className={`btn text-18px w-full px-5 mb-5 ${esCero ? 'disabled' : 'bg-333 text-white'}`}>
                    Agregar al carrito
                </button>
            </div>
        </>

    )
}

export default ItemCount