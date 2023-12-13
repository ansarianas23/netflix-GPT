import React from 'react'

const Seperator = ({ position }) => {
  return (
    <div className={`${position? position: ""} w-full h-[8px] bg-netflix-gray z-50`}></div>
  )
}

export default Seperator
