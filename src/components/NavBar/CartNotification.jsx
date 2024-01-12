import React from 'react'

const CartNotification = ({ cantidad }) => {
    return (
        <div className="cart-notification flex-centered">
            <span>{cantidad}</span>
        </div>
    )
}

export default CartNotification