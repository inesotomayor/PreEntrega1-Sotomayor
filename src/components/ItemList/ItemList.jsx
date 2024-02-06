import React, { useContext } from 'react'
import Item from '../Item/Item'

const ItemList = ({ productos }) => {

    return (
        <ul className="w-full px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
            {productos.map((producto) =>
                <Item producto={producto} key={producto.id} />
            )}
        </ul>
    )
}

export default ItemList