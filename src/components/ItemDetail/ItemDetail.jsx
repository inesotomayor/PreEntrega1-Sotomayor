import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ producto }) => {

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
                <h3 className="text-22px leading-none mb-4">{producto.nombre}</h3>
                <p className="font-montserrat text-12px max-w-[450px] mb-2">{producto.descripcion}</p>
                <p className="font-montserrat text-12px mb-3">Texto:&nbsp;
                    <strong>{producto.autor}</strong>
                </p>
                <p className="mb-6">
                    <strong>{producto.precio}</strong>
                </p>
                <ItemCount stock={producto.stock} />
            </div>

        </div>
    )
}
export default ItemDetail