"use client"
import React from 'react'

const Menu = ({state}) => {
    return (
        <div  className='w-7 h-7 py-[2px] flex flex-col justify-between **:transition-all **:duration-500'>
            <div className={`${state && "rotate-45 translate-y-[10px]"} w-full h-1 rounded-full bg-black`}></div>
            <div className={`${state ? "w-0 opacity-0" : " w-[70%]"} h-1 rounded-full bg-black`}></div>
            <div className={`${state ? "-rotate-45 -translate-y-[10px] w-full" : "w-[90%]"}  h-1 rounded-full bg-black`}></div>
        </div>
    )
}

export default Menu