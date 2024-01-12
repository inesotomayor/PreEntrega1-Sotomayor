import React, { useState } from 'react'

const ItemCount = ({ stock }) => {

    const [cantidad, setCantidad] = useState(1)

    const sumar = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }
    const restar = () => {
        cantidad > 0 && setCantidad(cantidad - 1)
    }
    const agregarCarrito = () => {
        console.log(`${'Se agregaron ' + cantidad + ' productos al carrito'}`)
    }

    const esCero = cantidad === 0
    const excedeStock = cantidad >= stock

    return (
        <>
            <div className="text-center">
                <div className="flex-centered gap-1 pb-5">

                    {/* Restar hasta 0 */}
                    <button onClick={restar} className={`btn text-24px
                    ${esCero ? 'disabled' : 'btn-primary'}`}>
                        -
                    </button>

                    <p className="flex-centered w-[80px] text-24px">
                        <strong>{cantidad}</strong>
                    </p>

                    {/* Sumar hasta stock */}
                    <button onClick={sumar} className={`btn px-4 text-30px 
                    ${excedeStock ? 'disabled' : 'btn-primary'}`}>
                        +
                    </button>

                </div>
                <button onClick={agregarCarrito} className={`btn text-18px w-full px-5 mb-5 
                    ${esCero ? 'disabled' : 'bg-333 text-white'}`}>
                    Agregar al carrito
                </button>
            </div>
        </>

    )
}

export default ItemCount