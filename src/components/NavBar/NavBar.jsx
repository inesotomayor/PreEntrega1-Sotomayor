import { useState } from 'react'
import Logo from './Logo'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'


const NavBar = ({ className }) => {
    const [menuAbierto, setMenuAbierto] = useState(false)
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto)
    }
    const cerrarMenu = () => {
        setMenuAbierto(false)
    }


    return (
        <header className={`row gx-0 ${className}`}>
            <div className="col">
                <div className="top-nav">
                    {/* Logo */}
                    <Link to="/" onClick={cerrarMenu}>
                        <Logo className="-mr-10 sm:-mr-20" />
                    </Link>

                    {/* Menu */}
                    <ul className="menu-list grow">
                        <li className="menu-item">
                            <a className="menu-link" onClick={toggleMenu}>
                                Obras
                            </a>
                            {menuAbierto && (
                                <ul className="submenu-list">
                                    <li className="menu-item">
                                        <Link to="/categoria/caligrafia" className="menu-link" onClick={cerrarMenu}>
                                            Caligrafía
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/categoria/lettering" className="menu-link" onClick={cerrarMenu}>
                                            Lettering
                                        </Link>
                                    </li>
                                    <li className="menu-item">
                                        <Link to="/categoria/ilustracion" className="menu-link" onClick={cerrarMenu}>
                                            Ilustración
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="menu-item">
                            <Link to="/bio" className="menu-link" onClick={cerrarMenu}>Bio</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/contacto" className="menu-link" onClick={cerrarMenu}>Contacto</Link>
                        </li>
                    </ul>

                    {/* Cart */}
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default NavBar