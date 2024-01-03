import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ id, foto, nombre, descripcion, precio, stock }) => {
    return (
        <li key={id} className="border p-10">
            <img src={foto} className="w-full mb-4" />
            <h3 className="text-22px">{nombre}</h3>
            <p className="font-montserrat text-12px">{descripcion}</p>
            <p><strong>{precio}</strong></p>
            <ItemCount stock={stock} />
        </li>
    )
}

export default Item