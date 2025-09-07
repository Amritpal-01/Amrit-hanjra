"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const total = 3;

const projects = [
    {
        thumbnail : "/agcinfo.png",
        description : "This is a simple to use platform where students can connect, Q/A and find study resources through our collections, build with",
        skills : ["Node.js", "MongoDB", "Next.js", "Oauth"]
    },
    {
        thumbnail : "/connect.jpg",
        description : "Its a one-on-one chat with well encrypted data and featurs like seen/unseen messages fully backed by sockets",
        skills : ["Node.js", "MongoDB", "IndexedDB", "Socket.io" , "Next.js"]
    },
    {
        thumbnail : "/blogspace.png",
        description : "A Simple bigenner level blogging website along side strapi as CMS",
        skills : ["Strapi", "Next.js", "IndexedDB"]
    },
]

const Projects = () => {
    const sliderCont = useRef(null)
    const [scrollPercentage, setScrollPercentage] = useState(0.01)

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (!window) return;

            const distanceFromTop = document.querySelector("#start").getBoundingClientRect().top + window.scrollY;
            const height = document.querySelector("#start").offsetHeight;
            const clientHeight = window.scrollY;

            const p = ((clientHeight - distanceFromTop) / height) * 100;


            if (p >= -20 && p <= 120) {
                setScrollPercentage(p);
            }

        })

    }, [])

    return (
        <div id="start" ref={sliderCont} style={{ height: `${total * 100}dvh` }} className={`w-full relative`}>
            <div className='sticky top-0 flex flex-col h-dvh w-full max-w-4xl mx-auto px-4 julius pt-10 overflow-hidden'>
                <div className='w-full pt-8 relative'>
                    <div style={{ width: `${scrollPercentage + 10}%` }} className='h-[1px] bg-gray-400'></div>
                    <h1 className='text-lg julius text-black'>Projects</h1>
                </div>

                <div
                    className='flex-1 px-4 gap-x-2 pb-20 flex items-center flex-row w-full overflow-visible'
                    style={{ transform: `translateX(-${scrollPercentage * total}%)` }}
                >

                    {projects.map(({thumbnail, description, skills} , idx) => (
                        <div key={idx} className='min-w-full h-full flex not-lg:flex-col items-center'>
                            <div className='lg:flex-1 not-lg:w-full h-72 m-2 rounded-md relative overflow-hidden'>
                                <Image
                                    src={thumbnail}
                                    alt={"img"}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                            <div className='lg:flex-1'>
                                <p className='m-2'>
                                    {description}
                                </p>
                                <ul style={{ listStyleImage: "url(/list-icon.png)" }} className='list-inside **:px-4 px-8'>
                                    {skills.map((skill , index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Projects