import React from 'react'

import ItemList from './products/ItemList'

const ItemListContainer = ({ greeting, subtitle, className }) => {




    return (
        <div className={`flex flex-col grow py-20 ${className}`}>
            <div className="text-center">
                <h1 className="title">{greeting}</h1>
                <h2 className="subtitle pb-5 mb-5">{subtitle}</h2>
            </div>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
