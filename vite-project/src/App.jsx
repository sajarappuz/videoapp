
import React from 'react'
import "./index.css"
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Video from './pages/Video';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/video",
      element: <Video/>,
    },
  ]);
  return (
    <div className='flex'>
      <Menu/>
      <div className='flex-[7]'>
      <Navbar/>
      <RouterProvider router={router} />
      </div>
    </div>
  )
}

export default App
