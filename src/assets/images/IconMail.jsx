import React from 'react'

const IconMail = ({ height, width, fill = "#CCCCCC", className }) => {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                height={height}
                width={width}
                viewBox="0 0 107 70"
                className={className}
            >
                <g>
                    <path stroke={fill} strokeWidth="7" fill="none" d="M103.8,66.5V3H3v63.5H103.8z" />
                    <path stroke={fill} strokeWidth="7" fill="none" d="M3.9,3.8l43.5,37.7c3.2,2.8,9.1,2.7,12.2,0l43.4-37.4" />
                    <path stroke={fill} strokeWidth="7" fill="none" d="M5.4,64.4l33.3-29.1" />
                    <path stroke={fill} strokeWidth="7" fill="none" d="M100.9,64.1L68.5,35.7" />
                </g>
            </svg>
        </>




    )
}

export default IconMail