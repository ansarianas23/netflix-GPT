import React, { useEffect } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from './components/Container'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from './utils/firebase'
import { addUser, removeUser } from './redux/userSlice/userSlice'
import { onAuthStateChanged } from 'firebase/auth'


const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        const {uid, email, displayName} = user;
        console.log("Hello",user)
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
      }else{
        dispatch(removeUser())
      }
    })
  },[])

  
  return (
    <>
      <div className='w-full absolute top-0 z-50'>
        <Header/>
      </div>

      <Outlet/>
      
      <Container>
        <Footer/>
      </Container>
    </>
  )
}

export default App
