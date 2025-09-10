"use client"
import { useNavigation } from '@/contexts/NavigationContext'
import Logo from '@/icons/Logo'
import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  const { activeSection, setActiveSection } = useNavigation()

  const handleClick = (str) => {
    const distanceFromTop = document.querySelector("#" + str).getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: distanceFromTop,
      behavior: "smooth"
    })

    // setActiveSection({
    //   type : str,
    //   state : true,
    // })
  }

  return (
    <div className='z-40 fixed top-0 left-0 w-dvw flex justify-center julius overflow-hidden'>
      <div className='max-w-7xl w-full p-4 flex justify-between items-center'>
        <div className='flex items-center gap-6'>
          <Logo />
          <button onClick={() => { handleClick("home") }} className={`text-md not-lg:hidden px-4 py-2  ${(activeSection.type === "home") && "bg-[#C281FF] text-white"} rounded-full cursor-pointer transition-all`}>Home</button>
        </div>
        <div className='flex items-center gap-4'>
          {["about", "skills", "projects", "contact"].map(str => (

            <button onClick={() => { handleClick(str) }} key={str} className={`${(activeSection.type === str) && "bg-[#C281FF] text-white"} text-md px-4 py-2 rounded-full hover:bg-gray-400/50 cursor-pointer transition-all duration-300 not-lg:hidden`}>{str}</button>
          ))}


          <div className='lg:hidden flex'>
            <Menu className='h-8 w-8'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar