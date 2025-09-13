"use client"
import { useNavigation } from '@/contexts/NavigationContext'
import Logo from '@/icons/Logo'
import Menu from '@/icons/booleanIcons/Menu'
import React, { useState } from 'react'

const Navbar = () => {
  const { activeSection, setActiveSection } = useNavigation()
  const [isMenuToggle, setIsMenuToggle] = useState()

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
    <nav className={`z-40 fixed top-0 left-0 w-full flex justify-center julius transition-all duration-300 ${isMenuToggle && "bg-[#f0f9f9]"}`}>
      <div className='max-w-7xl w-full p-4 flex justify-between items-center relative'>
        <div className='flex items-center gap-6'>
          <Logo />
          <button onClick={() => { handleClick("home") }} className={`text-md not-lg:hidden px-4 py-2  ${(activeSection.type === "home") && "bg-[#C281FF] text-white"} rounded-full cursor-pointer transition-all`}>Home</button>
        </div>
        <div className='flex items-center gap-4'>
          {["about", "skills", "projects", "contact"].map(str => (

            <button onClick={() => { handleClick(str) }} key={str} className={`${(activeSection.type === str) && "bg-[#C281FF] text-white"} text-md px-4 py-2 rounded-full hover:bg-gray-400/50 cursor-pointer transition-all duration-300 not-lg:hidden`}>{str}</button>
          ))}


          <div className='lg:hidden flex'>
            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <Menu state={isMenuToggle} />
            </button>
          </div>
        </div>


        {/* mobile Menu */}
        <div className={`w-full h-dvh bg-[#F0F9F9] absolute left-0 top-15 duration-300 transition-all ${isMenuToggle ? "" : "opacity-0 translate-x-full"}`}>
          <div className='w-full flex flex-col **:transition-all'>
            {["home", "about", "skills", "projects", "contact"].map(str => (

              <button onClick={() => { handleClick(str) }}
                key={str}
                className={`${(activeSection.type === str) ? "text-3xl" : "text-xl text-gray-400"} 
                 h-14 w-full font-bold flex justify-start items-center px-20
              `}>
                {str}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar