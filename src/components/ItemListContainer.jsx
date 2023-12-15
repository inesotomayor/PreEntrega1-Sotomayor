import React from 'react'

const ItemListContainer = ({ greeting, subtitle }) => {
    return (
        <div className="flex-centered flex-grow-1 pb-5">
            <h1 className="title">{greeting}</h1>
            <h2 className="subtitle pb-5 mb-5">{subtitle}</h2>
        </div>
    )
}

export default ItemListContainer
