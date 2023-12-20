import React from 'react'
import ItemCount from './cantidad/ItemCount'

const ItemListContainer = ({ greeting, subtitle }) => {
    return (

        <div className="flex-col-centered flex-grow-1">
            <h1 className="title">{greeting}</h1>
            <h2 className="subtitle pb-5 mb-5">{subtitle}</h2>
            <ItemCount stock="6" />
        </div>
    )
}

export default ItemListContainer
