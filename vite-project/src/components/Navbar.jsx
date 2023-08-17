import React from 'react'
import "../index.css"
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className='sticky top-0 h-[60px] '>
          <div className='flex items-center justify-end h-[100%] relative'>
              <div className='w-[40%] absolute left-0 right-0 mx-auto flex items-center justify-between border-solid border-[1px] border-slate-700 rounded-md'>
                 <input type="text"  className='bg-transparent border-none w-[90%]'/>
                 <SearchIcon/>
                </div> 
          <button className='font-bold rounded-md border-solid border-2 border-blue-300 max-w-max px-3 py-1'>SignIn</button>
             </div> 

    </div>
  )
}

export default Navbar