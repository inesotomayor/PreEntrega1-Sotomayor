import React from 'react'

const IconTrash = ({ height, width, className }) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height={height}
                width={width}
                viewBox="0 0 24 24"
                className={`cursor-pointer group ${className}`}
            >
                <path d="M13,0H11A3,3,0,0,0,8,3V4H2A1,1,0,0,0,2,6H3V20a4,4,0,0,0,4,4H17a4,4,0,0,0,4-4V6h1a1,1,0,0,0,0-2H16V3A3,3,0,0,0,13,0ZM10,3a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V4H10Zm9,17a2,2,0,0,1-2,2H7a2,2,0,0,1-2-2V6H19Z" className="fill-[#000] group-hover:fill-[#ff2b5d] duration-200" />
                <path d="M12,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,12,9Z" className="fill-[#000] group-hover:fill-[#ff2b5d] duration-200" />
                <path d="M15,18a1,1,0,0,0,2,0V10a1,1,0,0,0-2,0Z" className="fill-[#000] group-hover:fill-[#ff2b5d] duration-200" />
                <path d="M8,9a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V10A1,1,0,0,0,8,9Z" className="fill-[#000] group-hover:fill-[#ff2b5d] duration-200" />
            </svg>
        </>
    )
}





export default IconTrash