import React from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = ({ className }) => {
    return (
        <div className={`row gx-0 ${className}`}>
            <div className="col">
                <div className="top-nav">
                    {/* Logo */}
                    <Link to="/">
                        <Logo className="-mr-20" />
                    </Link>

                    {/* Menu */}
                    <ul className="menu-list grow">
                        <li className="menu-item">
                            <Link to="/categoria/caligrafia" className="menu-link">Caligrafía</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/categoria/lettering" className="menu-link">Lettering</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/categoria/lettering-digital" className="menu-link">Lettering Digital</Link>
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