import React from 'react'
import SignUpForm from '../components/SignUpForm'

const SignUpPage = () => {
  return (
    <div className='w-full min-h-screen bg-cover bg-no-repeat bg-center bg-hero relative'>

      <div className='w-full flex justify-center pt-20'>
        <SignUpForm/>
      </div>

      {/* gradiant rapper div */}
      <div className='w-full h-full z-10 absolute top-0 left-0 custom-bg-gradiant'></div>
    </div>
  )
}

export default SignUpPage
