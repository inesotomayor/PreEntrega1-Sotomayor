import React from 'react'
import IconCart from '../assets/images/IconCart'
import CartNotification from './CartNotification'

const CartWidget = () => {
    return (
        <div className="cart">
            <IconCart height={40} fill="#000" className="icon-bag" />
            <CartNotification cantidad={3} />
        </div>
    )
}

export default CartWidget