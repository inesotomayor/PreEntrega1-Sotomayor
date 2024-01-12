import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <li className="border p-6">

            {/* Categorías del producto con link a la categoría */}
            <p className="font-montserrat text-[9px] tracking-widest text-primary hover:text-black uppercase mb-4">
                <Link to={`/categorias/${producto.categoria}`}>
                    {producto.categoria}
                </Link></p>

            {/* Foto del producto con link al detalle */}
            <Link to={`/detalle/${producto.id}`}>
                <img src={producto.foto} className="w-full mb-4" />
            </Link>

            {/* Título del producto con link al detalle */}
            <h3 className="text-22px leading-none mb-3">
                <Link to={`/detalle/${producto.id}`}>
                    {producto.nombre}
                </Link>
            </h3>
            <p className="font-montserrat text-12px mb-2">{producto.descripcion}</p>
            <p className="font-montserrat text-12px mb-3">Texto:&nbsp;
                <strong>{producto.autor}</strong>
            </p>
            <p className="mb-6">
                <strong>{producto.precio}</strong>
            </p>
            <p className="">
                <Link to={`/detalle/${producto.id}`}>
                    Ver detalle
                </Link>
            </p>
            <ItemCount stock={producto.stock} />

        </li>
    )
}

export default Item