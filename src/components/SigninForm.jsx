import React, { useRef, useState } from 'react'
import { checkValidateData } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../redux/userSlice/userSlice';
import { useDispatch } from 'react-redux';

const SignInForm = () => {

   const [isSigninForm, setIsSigninForm] = useState(true)
   const [error, setError] = useState(null)
   const dispatch = useDispatch();

  
   const name = useRef()
   const email = useRef()
   const password = useRef()
   const navigate = useNavigate()

  const toggleForm = () =>{
    setIsSigninForm(!isSigninForm)
  }

  const handleClickSubmit = ()=>{
    const errorMessage = checkValidateData( email.current.value, password.current.value);
    setError(errorMessage)
    if(errorMessage) return;

    if(isSigninForm){
      // sign in or login in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/home')
        console.log("from signin compnent",user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode +"-"+ errorMessage)
      });
    }
    else{
      // signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL: photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
          navigate("/home");


        }).catch((error) => {
          // An error occurred
          setError(error.message);
        });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode+"-"+errorMessage)
      });
    }
  }



  return (
    <div className='text-white flex flex-col w-[450px] h-fit bg-black px-16 pt-10 pb-20 rounded-md bg-opacity-70 z-20'>
      <h3 className='text-3xl font-semibold mb-7'>{isSigninForm? "Sign in" : "Sign Up"}</h3>

      <form onSubmit={(e)=>{e.preventDefault()}} className='w-full'>
        {!isSigninForm && <input ref={name} className='w-full rounded-sm bg-[#333333] text-white p-3 focus:bg-[#454545] outline-none placeholder:text-stone-400 mb-5' placeholder='Enter your name' type="text" />}

        <input ref={email} className='w-full rounded-sm bg-[#333333] text-white p-3 focus:bg-[#454545] outline-none placeholder:text-stone-400 mb-5' placeholder='Enter email or phone number' type="text" />

        <input ref={password} className='w-full rounded-sm bg-[#333333] text-white p-3 focus:bg-[#454545] outline-none placeholder:text-stone-400' placeholder='Password' type="password" />

        <p className='text-red-600 pt-3'>{error}</p>

        <button onClick={handleClickSubmit} className='bg-netflix-red w-full py-3 rounded-sm font-semibold mt-10'>{isSigninForm? "Sign in" : "Sign up"}</button>
      </form>

      <div className='flex justify-between mt-2 mb-8'>
        <div className='flex items-center space-x-2'>
          <input type="checkbox" name="" id="" />
          <span className='text-sm text-stone-400'>Remember me</span>
        </div>
        <span className='text-sm text-stone-400 cursor-pointer hover:underline'>Need Help?</span>
      </div>

      <span className='text-stone-400'>
        {isSigninForm? "New to Netflix?" : "Already a user"} 
        <span onClick={toggleForm} className='font-semibold text-white hover:underline cursor-pointer'> {isSigninForm? "Sign up now." : "Sign in now"}</span>
      </span>
    </div>
  )
}

export default SignInForm
