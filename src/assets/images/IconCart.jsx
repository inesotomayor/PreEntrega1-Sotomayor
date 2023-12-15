import React from 'react'

const IconCart = ({ height, width, fill = "#CCCCCC", className }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}
        viewBox="0 0 24 24"
        className={className}
      >
        <path d="M20.9,6H17V5c0-2.8-2.2-5-5-5S7,2.2,7,5v5h2V8h4V6H9V5c0-1.7,1.3-3,3-3c1.7,0,3,1.3,3,3v5h2V8h2.1l0.9,14H4.1  L4.9,8H5V6H3.1L1.9,24h20.1L20.9,6z" fill={fill} />
      </svg>
    </>
  )
}

export default IconCart