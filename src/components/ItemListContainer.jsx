import React from 'react'

import ItemList from './products/ItemList'

const ItemListContainer = ({ greeting, subtitle }) => {




    return (
        <div className="flex-col-centered flex-grow-1 py-20">
            <div className="text-center">
                <h1 className="title">{greeting}</h1>
                <h2 className="subtitle pb-5 mb-5">{subtitle}</h2>
            </div>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
