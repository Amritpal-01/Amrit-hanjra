import React, {useRef, useState} from 'react'
import Image from 'next/image'
import { Link } from 'lucide-react'


const ProjectCard = ({thumbnail, skills, description, title, idx, url}) => {

    const cardRefs = useRef([])
    const [Hover, setHover] = useState(false)

    // Parallax mouse effect for cards (desktop only)
    const handleMouseMove = (e, idx) => {
        if (window.innerWidth < 768) return
        setHover(true)
        const card = cardRefs.current[idx]
        if (!card) return
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        card.style.transform = `rotateY(${x / 30}deg) rotateX(${-y / 30}deg) scale(1.03)`
    }
    const handleMouseLeave = (idx) => {
        setHover(false)
        const card = cardRefs.current[idx]
        if (!card) return
        card.style.transform = ""
    }


    return (
        <a
            href={url}
            ref={el => (cardRefs.current[idx] = el)}
            className={`
              group relative bg-white/80 shadow-2xl rounded-2xl overflow-hidden flex flex-col
              hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]
              transition-all duration-500 ease-[cubic-bezier(.4,2,.3,1)]
              cursor-pointer fade-in
            `}
            style={{ minHeight: 420 }}
            onMouseMove={e => handleMouseMove(e, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            tabIndex={0}
        >
            <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={idx === 0}
                />

                <div className={`w-full ${Hover? "h-12" : "h-0"} overflow-hidden transition-all bg-blue-900/50 absolute bottom-0 right-0 flex gap-2 justify-center items-center text-[#fff]`}>
                    <h3 className='text-xl'>Visit</h3>
                    <Link className='w-5 h-5' />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <span className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider shadow">
                    {title}
                </span>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
                <p className=" text-gray-800 text-base md:text-lg mb-4 font-medium">
                    {description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                    {skills.map((skill, i) => (
                        <li
                            key={i}
                            className="bg-white text-gray-400 border border-black/10 px-3 py-1 rounded-full text-xs font-semibold shadow"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>

            </div>
            {/* Animated border on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-black/20 transition-all duration-500"></div>
            {/*  effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className=""></div>
            </div>

        </a>
    )
}

export default ProjectCard