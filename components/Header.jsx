"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const bulbUrl = "/bulbImage.png";

const Header = () => {
  const image = useRef(null)
  const [pointer, setPointer] = useState({ x: 0, y: 0, midX: 0, midY: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const midX = window.innerWidth / 2;
      const midY = window.innerHeight / 2;

      const x = e.clientX - midX;
      const y = e.clientY - midY;

      setPointer({ x, y, midX, midY })
    })
  }, [])

  return (
    <div id="home" className='w-full h-full bg-gradient-to-t from-[#777777] to-[#F0F9F9] flex justify-center overflow-hidden z-0 relative'>

      <div
        style={{
          transform: `translate(${(pointer.x / pointer.midX) * 10}px, ${(pointer.y / pointer.midY) * 10 + 10}px)`,
        }} className="flex-1 mt-[25dvh] flex flex-col justify-center items-center w-full relative text-black/30 not-md:transition-all">

        {/* Line 1 */}
        <div className="relative w-fit">
          <h1 className="relative z-0 lg:text-6xl md:text-5xl text-3xl font-bold blur-[1px]">
            Lets Create Something
          </h1>
          <h1
            aria-hidden
            className="absolute inset-0 z-20 lg:text-6xl md:text-5xl text-3xl font-bold text-white/10 [-webkit-text-stroke:0.7px_#E468F7] pointer-events-none"
          >
            Lets Create Something
          </h1>
        </div>

        {/* Line 2 */}
        <div className="relative w-fit">
          <h1 className="relative z-0 lg:text-9xl md:text-8xl text-6xl font-bold blur-[1px]">
            Unforgetable
          </h1>
          <h1
            aria-hidden
            className="absolute inset-0 z-20 lg:text-9xl md:text-8xl text-6xl font-bold text-white/10 [-webkit-text-stroke:0.7px_#E468F7] pointer-events-none"
          >
            Unforgetable
          </h1>
        </div>

        <Image
          style={{
            transform: `translate(${(pointer.x / pointer.midX) * 10}px, ${(pointer.y / pointer.midY) * 10 + 10}px)`,
          }}
          ref={image}
          src={bulbUrl}
          alt="bulb"
          fill
          className="object-contain not-md:transition-all z-10 pointer-events-none"
        />
      </div>


      <div className='mt-24 w-full max-w-4xl px-5 flex flex-col julius absolute'>
        <h2 className='lg:text-3xl md:text-2xl text-xl'> hi, am amritpal singh</h2>
        <h2 className='lg:text-4xl md:text-3xl text-2xl'> A Full-Stack Software / web Developer</h2>
      </div>

    </div>
  )
}

export default Header