
import DirectContact from "@/components/DirectContact"
import Project from "@/components/Project"
import Skills from "@/components/Skills"
import SocialContacts from "@/components/SocialContacts"
import { Mail } from "lucide-react"

const projects = [
  {
    thumbnail: "/connect.png",
    domain: "connect-plum.vercel.app",
    status: "Ready",
    created_at: "14 july",
    created_by: "Amritpal Singh",
    tech: [
      "Nextjs",
      "MongoDB",
      "Firebase"
    ]
  },
  {
    thumbnail: "/agcinfo.png",
    domain: "agcinfo.vercel.app",
    status: "Ready",
    created_at: "24 aug",
    created_by: "Amritpal Singh",
    tech: [
      "Nextjs",
      "MongoDB",
    ]
  }
]

export default function Home() {

  return (
    <div>
      <header className="flex flex-col max-w-dvw min-[1000px]:px-64 min-[600px]:px-20 px-10 overflow-hidden">
        <div className="w-full pt-14 sm:pb-16 pb-0 flex flex-col gap-5">
          <div className="w-full flex flex-col sm:pb-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Amritpal Singh</h1>
            <h1 className="text-xl sm:text-2xl font-semibold -mt-2 text-[#6F6F6F]">Web Developer</h1>
          </div>

          <div className="flex xl:flex-row flex-col gap-10">

            <SocialContacts />

            <div className="flex-1">
              Hi, I&apos;m Amrit – a budding web developer passionate about crafting sleek, functional, and user-friendly digital experiences. Exploring the MERN stack and beyond, I love turning ideas into interactive reality.
            </div>
          </div>
        </div>
      </header>


      <Skills />

      {/* main */}
      <main className="flex flex-col max-w-dvw bg-black/30 backdrop-blur-lg  py-10">

        <div className="flex flex-col gap-10 mb-20 relative">
          <div className="flex-1 flex flex-col gap-3  min-[1000px]:px-64 min-[600px]:px-20 px-10">
            <h2 className="pb-4 text-3xl font-bold text-blue-400/45">Services</h2>
            <h2 className="pl-5 text-lg font-medium">
              Website Development
            </h2>
            <li className="pl-10 text-lg list-disc text-[#6F6F6F]">
              Building portfolio websites, business landing pages, or e-commerce related web-services HTML, CSS, JavaScript, React, or Next.js.

            </li>
            <h2 className="pl-5 text-lg font-medium">
              UI/UX Design
            </h2>
            <li className="pl-10 text-lg list-disc text-[#6F6F6F]">
              Designing simple, clean interfaces in Figma or converting designs to code.
            </li>
          </div>
        </div>

        <div className="flex flex-wrap justify-around gap-y-10 pb-10 min-[1000px]:px-64 min-[600px]:px-10 px-5">

          {projects.map(project => {
            return <Project key={project.domain} project={project} />
          })}

        </div>

      </main>


      <section className="flex lg:flex-row flex-col items-center w-full min-[1300px]:px-52 px-10 not-sm:p-2 overflow-hidden py-10 pb-20">
        <div className="lg:w-[50%] w-full flex flex-col justify-center items-center m-5">
          <div className="flex flex-col py-2 pl-8">
            <h1 className="text-6xl font-bold leading-20 max-[1200px]:leading-12 py-1 max-[1200px]:text-4xl text-blue-400/45">DON&apos;T BE <br />A STRANGER</h1>
            <h2 className="text-2xl max-[1200px]:text-xl">LETS CREATE SOMETHING MEANINGFULL</h2>
          </div>
          <div className="bg-white/10 h-[2px] w-full max-w-md" />
          <h3 className="w-full max-w-md py-2 px-8 flex items-center"><Mail className="mr-2 h-5 w-5 text-blue-400/45" /> amritpalonly13571@gmail.com</h3>
        </div>
        <div className="flex flex-1">
          <DirectContact/>
        </div>
      </section>

      <footer className="w-full bg-[#202021] text-center py-5 border-t border-t-white/10 pb-20">
        <p className="text-sm text-[#6F6F6F]">© 2024 Amritpal Singh. All rights reserved.</p>
      </footer>

    </div>
  )
}