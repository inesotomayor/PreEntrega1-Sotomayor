import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div className="row gx-0">
            <div className="col">
                <div className="top-nav">
                    {/* Logo */}
                    <Logo className="-mr-20" />

                    {/* Menu */}
                    <ul className="menu-list grow">
                        <li className="menu-item">
                            <a href="#" className="menu-link">Caligrafía</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">Lettering</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">Lettering Digital</a>
                        </li>
                    </ul>

                    {/* Cart */}
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar