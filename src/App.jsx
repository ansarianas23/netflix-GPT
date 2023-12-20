import React, { useEffect } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Container from './components/Container'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from './utils/firebase'
import { addUser, removeUser } from './redux/userSlice/userSlice'
import { onAuthStateChanged } from 'firebase/auth'


const App = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        const {uid, email, displayName} = user;
        dispatch(addUser({
          uid: uid, 
          email: email, 
          displayName: displayName}));

          navigate("/home");
      }else{
        dispatch(removeUser())
        navigate("/");
      }
    })

    // cleanup this will be called when component will unmount
    return ()=> unsubscribe();
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
