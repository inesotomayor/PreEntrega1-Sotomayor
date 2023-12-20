import React, { useState, useEffect } from 'react'

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

    // useEffect(() => {
    // }, [])


    return (
        <>
            <div className="text-center">
                <p>Cantidad:</p>
                <div className="flex-centered gap-1 pb-5">
                    <button onClick={restar} className={`btn px-4 text-24px 
                    ${esCero ? 'btn-secondary disabled opacity-25' : ' btn-primary'}`}>
                        -
                    </button>
                    <p className="flex-centered w-25 text-18px leading-none"><strong>{cantidad}</strong></p>
                    <button onClick={sumar} className={`btn px-4 text-30px 
                    ${excedeStock ? 'btn-secondary disabled opacity-25' : ' btn-primary'}`}>
                        +
                    </button>
                </div>
                <button onClick={agregarCarrito} className={`btn text-18px px-5 mb-5 
                    ${esCero ? 'btn-secondary disabled opacity-25' : ' btn-primary'}`}>
                    Agregar al carrito
                </button>
            </div>
        </>

    )
}

export default ItemCount