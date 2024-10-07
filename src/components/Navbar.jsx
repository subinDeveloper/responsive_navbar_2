import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const Navbar = () => {
    const[exptendNavbar,setExptendNavbar] = useState(false)
    // console.log(exptendNavbar);
    
  return (
    <div className=" bg-cyan-300 text-black h-20 px-6">
     <div className="max-w-7xl flex justify-between items-center h-20 mx-auto">
        <h1 className="text-5xl font-semibold">Logo</h1>
        <div className="flex gap-6 items-center">
        <ul className={`flex hover:underline hover:cursor-pointer flex-col lg:flex-row absolute top-24 lg:static gap-6 font-serif duration-500 text-2xl ${exptendNavbar ? "left-10" : "left-[-100px]"}`}>
            <li>Home</li>
            <li>About</li>
            <li>Career</li>
            <li>Login</li>
            <li>Signup</li>
        </ul>
        <div className="lg:hidden" onClick={() => {setExptendNavbar(open => !open)}}>
            {
                exptendNavbar ? <CloseIcon/> :   <MenuIcon/>
            }
          
        </div>
        </div>
     </div>
    </div>
  )
}

export default Navbar
