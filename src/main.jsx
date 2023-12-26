import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import SignInPage from './pages/SignInPage.jsx'
import HomePage from './pages/HomePage.jsx'
import App from './App.jsx'
import { Provider } from 'react-redux'
import appStore from './redux/store/appStore.js'
import GptSearchPage from './pages/GptSearchPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/search' element={<GptSearchPage/>}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={appStore}>
      <RouterProvider router={router}>
        <App/>
      </RouterProvider>
    </Provider>
)
