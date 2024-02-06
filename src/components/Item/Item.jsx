import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const Item = ({ producto }) => {

    const { formatoARS } = useContext(CartContext)

    const [agrandar, setAgrandar] = useState(false)

    const handleMouseOver = () => {
        setAgrandar(true)
    }

    const handleMouseLeave = () => {
        setAgrandar(false)
    }



    return (
        <li className={`relative border p-6 duration-300 ${agrandar ? 'scale-[1.025] shadow-lg border-primary/50' : 'scale-1'}`}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
        >
            {/* Click en la card para ir al detalle */}
            <Link className="absolute z-10 inset-0 cursor-pointer" to={`/detalle/${producto.id}`} />

            {/* Categorías del producto con link a la categoría */}
            <p className="relative z-20 font-montserrat text-[9px] tracking-widest text-primary hover:text-black uppercase mb-4">
                <Link to={`/categoria/${producto.categoria}`}>
                    {producto.categoria}
                </Link></p>

            {/* Foto */}
            <img src={producto.foto} className="w-full mb-4" />

            {/* Título */}
            <h3 className="text-22px leading-none mb-3">{producto.nombre} <span className="text-15px">({producto.ano})</span></h3>

            {/* Precio */}
            <p className="mb-2">
                <strong>{formatoARS(producto.precio)}</strong>
            </p>

        </li >
    )
}

export default Item