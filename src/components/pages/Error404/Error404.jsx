import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="flex-centered flex-col grow pb-[120px]">
            <h1 className="title text-ccc mb-4">Ooops :(</h1>
            <p>
                <Link to="/" className="font-montserrat text-[14px] underline hover:text-primary">Ir a Home</Link>
            </p>
        </div>
    )
}

export default Error404