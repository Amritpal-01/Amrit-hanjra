import React, { useRef } from 'react'
import Image from 'next/image'

const projects = [
  {
    thumbnail: "/agcinfo.png",
    title: "AGC Info",
    description: "A simple platform where students connect, Q/A, and find study resources through curated collections.",
    skills: ["Node.js", "MongoDB", "Next.js", "Oauth"]
  },
  {
    thumbnail: "/connect.png",
    title: "Connect Chat",
    description: "One-on-one chat with encrypted data, seen/unseen messages, and real-time sockets.",
    skills: ["Node.js", "MongoDB", "IndexedDB", "Socket.io", "Next.js", "Firebase - Auth"]
  },
  {
    thumbnail: "/blogspace.png",
    title: "BlogSpace",
    description: "A beginner-friendly blogging website powered by Strapi as CMS.",
    skills: ["Strapi", "Next.js", "IndexedDB"]
  },
]

const ProjectsQ = () => {
  const cardRefs = useRef([])

  // Parallax mouse effect for cards (desktop only)
  const handleMouseMove = (e, idx) => {
    if (window.innerWidth < 768) return
    const card = cardRefs.current[idx]
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    card.style.transform = `rotateY(${x / 30}deg) rotateX(${-y / 30}deg) scale(1.03)`
  }
  const handleMouseLeave = (idx) => {
    const card = cardRefs.current[idx]
    if (!card) return
    card.style.transform = ""
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-20">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold julius text-black tracking-wide mb-2 drop-shadow-lg">
          Projects
        </h2>
        <div className="mx-auto h-1 w-32 bg-gradient-to-r from-gray-400 via-black to-gray-400 rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg">A showcase of my recent work and experiments</p>
      </div>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={el => (cardRefs.current[idx] = el)}
            className={`
              group relative bg-white/80 shadow-2xl rounded-2xl overflow-hidden flex flex-col
              hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.25)]
              transition-all duration-500 ease-[cubic-bezier(.4,2,.3,1)]
              cursor-pointer
            `}
            style={{ minHeight: 420 }}
            onMouseMove={e => handleMouseMove(e, idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
            tabIndex={0}
          >
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              <span className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider shadow">
                {project.title}
              </span>
            </div>
            <div className="flex-1 p-6 flex flex-col justify-between">
                <p className=" text-gray-800 text-base md:text-lg mb-4 font-medium">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill, i) => (
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
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsQ