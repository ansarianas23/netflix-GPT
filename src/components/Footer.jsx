import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex flex-col text-stone-300 px-8 py-5 lg:py-12 space-y-4'>
      <div>Questions? Call <span className='underline'>000-800-919-1694</span></div>

      <ul className='grid grid-cols-2 lg:grid-cols-4 underline cursor-pointer gap-y-2 flex-wrap'>
        <li>FAQ</li>
        <li>Help Centre</li>
        <li>Account</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Ways to Watch</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
        <li>Speed Test</li>
        <li>Legal Notices</li>
        <li>Only on Netflix</li>
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
