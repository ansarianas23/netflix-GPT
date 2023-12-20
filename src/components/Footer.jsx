import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col text-stone-300 px-8 py-5 lg:py-12 space-y-4'>
      <div>Questions? Call <span className='underline'>000-800-919-1694</span></div>

      <ul className='grid grid-cols-2 lg:grid-cols-4 gap-y-2 flex-wrap'>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>FAQ</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Help Centre</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Account</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Media Centre</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Investor Relations</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Jobs</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Ways to Watch</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Terms of Use</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Privacy</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Cookie Preferences</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Corporate Information</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Contact Us</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Speed Test</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Legal Notices</li>
        <li className='hover:underline cursor-pointer hover:text-red-500 transition-all w-fit delay-75'>Only on Netflix</li>
      </ul>

      <select className='w-fit bg-transparent text-white px-6 rounded-sm border-gray-700 border-[1px] '>
          <option className='text-black'>English</option>
          <option className='text-black'>हिन्दी</option>
      </select>

      <span>Netflix India</span>

    </div>
  )
}

export default Footer
