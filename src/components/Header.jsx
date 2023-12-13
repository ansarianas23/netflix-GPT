import React from 'react'
import { NETFLIX_LOGO } from '../utils/constans'

const Header = () => {
  return (
    <div className='max-w-full mx-auto flex items-center justify-between xl:px-44 px-6 py-4'>
      <div className='w-40 h-fit'>
        <img className='w-full h-fit' src={NETFLIX_LOGO} alt="" />
      </div>

      <div className='flex space-x-6'>
        <select className='bg-transparent text-white px-6 rounded-sm border-gray-700 border-[1px] '>
          <option className='text-black'>English</option>
          <option className='text-black'>हिन्दी</option>
        </select>

        <button className='bg-netflix-red text-white px-4 rounded-sm font-semibold py-1 cursor-pointer'>Sign In</button>
      </div>
    </div>
  )
}

export default Header
