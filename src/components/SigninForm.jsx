import React from 'react'
import { Link } from 'react-router-dom'

const SigninForm = () => {
  return (
    <div className='text-white flex flex-col w-[450px] h-fit bg-black px-16 pt-10 pb-20 rounded-md bg-opacity-70 z-20'>
      <h3 className='text-3xl font-semibold'>Sign in</h3>

      <div className='w-full space-y-5 mt-7 mb-12'>
        <input className='w-full rounded-sm bg-[#333333] text-white p-3 focus:bg-[#454545] outline-none placeholder:text-stone-400' placeholder='Enter email or phone number' type="text" />
        <input className='w-full rounded-sm bg-[#333333] text-white p-3 focus:bg-[#454545] outline-none placeholder:text-stone-400' placeholder='Password' type="password" />
      </div>
      <button className='bg-netflix-red w-full py-3 rounded-sm font-semibold'>Sign in</button>

      <div className='flex justify-between mt-3 mb-8'>
        <div className='flex items-center space-x-2'>
          <input type="checkbox" name="" id="" />
          <span className='text-sm text-stone-400'>Remember me</span>
        </div>
  
        <span className='text-sm text-stone-400 cursor-pointer hover:underline'>Need Help?</span>
      </div>

      <span className='text-stone-400'>
        New to Netflix? 
        <Link to="/signup"><span className='font-semibold text-white hover:underline cursor-pointer'>Sign up now.</span></Link>
      </span>
    </div>
  )
}

export default SigninForm
