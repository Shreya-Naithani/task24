import React from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 right-0  flex justify-center sm:justify-start sm:gap-[7rem] h-[5rem] bg-gray-400 items-center'>
      <div>
        <img className=" hidden md:block p-4 rounded-full h-[80px]  w-[80px]" src={logo} alt="logo"/>    
         </div>
         <div className='flex  gap-9 list-none'>
            <li className='text-xl cursor-pointer'>Home</li>
            <li className='text-xl cursor-pointer'>Categories</li>
            <li className='text-xl cursor-pointer'>About Us</li>
         </div>
    </div>
  )
}

export default Navbar