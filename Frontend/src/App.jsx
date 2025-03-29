import React from 'react'
import HomePage from './PathsWithNav&Footer/HomePage'
import { Route, Routes } from 'react-router-dom'
import Courses from './PathsWithNav&Footer/Courses'
import Signup from './components/Signup'
import ContactPage from './PathsWithNav&Footer/ContactPage'
import AboutPage from './PathsWithNav&Footer/AboutPage'

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
    </Routes>
    </div>
    </>
  )
}


export default App