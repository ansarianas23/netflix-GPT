import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1200px] w-full mx-auto relative'>
      {children}
    </div>
  )
}

export default Container
