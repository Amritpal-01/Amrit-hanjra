"use client"
import Logo from '@/icons/Logo'
import React, { useEffect } from 'react'

const Navbar = () => {

  return (
    <div className='z-40 fixed top-0 left-0 w-dvw flex justify-center julius overflow-hidden'>
        <div className='max-w-7xl w-full p-4 flex justify-between items-center'>
            <div className='flex items-center gap-6'>
                <Logo/>
                <a href='#home' className='text-md px-4 py-2 text-white bg-[#C281FF] rounded-full cursor-pointer transition-all'>Home</a>
            </div>
            <ul className='lg:flex items-center gap-4 hidden'>
                <a href='#about' className='text-md px-4 py-2 rounded-full hover:bg-gray-400/50 cursor-pointer transition-all duration-300'>About</a>
                <a href="#skills" className='text-md px-4 py-2 rounded-full hover:bg-gray-400/50 cursor-pointer transition-all duration-300'>Skills</a>
                <a href='#projects' className='text-md px-4 py-2 rounded-full hover:bg-gray-400/50 cursor-pointer transition-all duration-300'>Projects</a>
                <a href='#contact' className='text-md px-4 py-2 rounded-full hover:bg-gray-400/50 cursor-pointer transition-all duration-300'>Contact Us</a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar