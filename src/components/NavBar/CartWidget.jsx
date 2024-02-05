import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import IconCart from '../../assets/images/IconCart'
import { Link } from 'react-router-dom'


const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext)
    const carritoConItems = cantidadTotal() > 0

    return (
        <div className="w-[50px]">
            <Link to="/carrito" className="cart">
                <IconCart height={40} fill="#000" className="icon-bag" />
                {carritoConItems &&
                    <div className="cart-notification flex-centered">
                        <span>{cantidadTotal()}</span>
                    </div>}
            </Link>
        </div>
    )
}

export default CartWidget