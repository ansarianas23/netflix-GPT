import React from 'react'
import LoginForm from '../components/LoginForm'

const SignInPage = () => {
  return (
    <div className='w-full min-h-screen bg-cover bg-no-repeat bg-center bg-hero relative'>

      <div className='w-full flex justify-center items-center px-2 pt-52'>
        <LoginForm/>
      </div>

      {/* gradiant rapper div */}
      <div className='w-full h-full z-10 absolute top-0 left-0 custom-bg-gradiant'></div>
    </div>
  )
}

export default SignInPage

