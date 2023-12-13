import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPag from './pages/SignUpPage.jsx'
import HomePage from './pages/HomePage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignUpPag/>}/>
        <Route path='/home' element={<HomePage/>}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>,
)
