
import React from 'react'
import "./index.css"
import Menu from './components/Menu'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='flex'>
      <Menu/>
      <div className='flex-[7]'>
      <Navbar/>
      </div>
    </div>
  )
}

export default App
