import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    thumbnail: "/agcinfo.png",
    title: "AGC Info",
    description: "A simple platform where students connect, Q/A, and find study resources through curated collections.",
    skills: ["Node.js", "MongoDB", "Next.js", "Oauth"],
    url: "https://agcinfo.vercel.app/"
  },
  {
    thumbnail: "/connect.png",
    title: "Connect Chat",
    description: "One-on-one chat with encrypted data, seen/unseen messages, and real-time sockets.",
    skills: ["Node.js", "MongoDB", "IndexedDB", "Socket.io", "Next.js", "Firebase - Auth"],
    url: "https://connect-plum.vercel.app/"
  },
  {
    thumbnail: "/blogspace.png",
    title: "BlogSpace",
    description: "A beginner-friendly blogging website powered by Strapi as CMS.",
    skills: ["Strapi", "Next.js", "IndexedDB"],
    url: "https://blogspace-amrs.vercel.app/"
  },
]

const ProjectsQ = () => {

  return (
    <section className="w-full max-w-6xl mx-auto p-4 min-h-screen flex items-center flex-col">
      <div className="mb-16 text-center fade-in">
        <h2 className="text-4xl md:text-5xl font-bold julius text-black tracking-wide mb-2 drop-shadow-lg">
          Projects
        </h2>
        <div className="mx-auto h-1 w-32 bg-gradient-to-r from-gray-400 via-black to-gray-400 rounded-full mb-4"></div>
        <p className="text-gray-600 text-lg">A showcase of my recent work and experiments</p>
      </div>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} url={project.url} idx={idx} thumbnail={project.thumbnail} title={project.title} description={project.description} skills={project.skills} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsQ