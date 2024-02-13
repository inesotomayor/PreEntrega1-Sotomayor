import React from 'react'
import IconInstagram from '../../assets/images/IconInstagram'
import IconFacebook from '../../assets/images/IconFacebook'
import IconMail from '../../assets/images/IconMail'

const Contacto = () => {
    return (
        <main className="container-general">
            <h2 className="subtitle text-center my-20">Más información en:</h2>
            <ul className="flex flex-col gap-6 w-[180px] mx-auto">
                <li>
                    <a href="https://www.instagram.com/lalluviadeletras/" target="_blank" className="flex items-center gap-3 text-black hover:text-primary">
                        <IconInstagram width={34} fill="#000" className="-ml-1" />
                        <p>Lluvia de Letras</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/lalluviadeletras" target="_blank" className="flex items-center gap-3 text-black hover:text-primary">
                        <IconFacebook width={30} fill="#000" />
                        <p>Lluvia de Letras</p>
                    </a>
                </li>
                <li>
                    <a href="mailto:inesotomayor@gmail.com" className="flex items-center gap-3 text-black hover:text-primary">
                        <IconMail width={30} fill="#000" />
                        <p>E-mail</p>
                    </a>
                </li>
            </ul>
        </main>
    )
}

export default Contacto