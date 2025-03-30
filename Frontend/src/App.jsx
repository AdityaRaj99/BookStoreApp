import React from 'react'
import HomePage from './PathsWithNav&Footer/HomePage'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './PathsWithNav&Footer/Courses'
import Signup from './components/Signup'
import ContactPage from './PathsWithNav&Footer/ContactPage'
import AboutPage from './PathsWithNav&Footer/AboutPage'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/course' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    <Toaster />
    </div>
    </>
  )
}


export default App