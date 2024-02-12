import React from 'react'

const Logo = ({ className }) => {
    return (
        <div className={`w-[100px] sm:w-[150px] md:w-[200px] text-center ${className}`}>
            <img src="/images/logo_inesotomayor.png" className="mt-5 mb-2.5 mx-auto" />
        </div>
    )
}

export default Logo