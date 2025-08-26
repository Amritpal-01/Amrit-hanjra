
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
        <div className="w-full pt-14 sm:pb-16 pb-8 flex flex-col gap-5">
          <div className="w-full flex flex-col">
            <h1 className="text-3xl font-bold">Amritpal Singh</h1>
            <h1 className="text-xl font-semibold -mt-2 text-[#6F6F6F]">Web Developer</h1>
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
            <h2 className="pb-2 text-2xl font-bold text-[#93B5FF]">Services</h2>
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
            <h1 className="text-6xl font-bold leading-20 max-[1200px]:leading-12 py-1 max-[1200px]:text-4xl">DON&apos;T BE <br />A STRANGER</h1>
            <h2 className="text-2xl max-[1200px]:text-xl">LETS CREATE SOMETHING MEANINGFULL</h2>
          </div>
          <div className="bg-white/10 h-[2px] w-full max-w-md" />
          <h3 className="w-full max-w-md py-2 px-8 flex items-center"><Mail className="mr-3 h-5 w-5" /> amritpalonly13571@gmail.com</h3>
        </div>
        <div className="flex flex-1">
          <div className="w-full mx-3 min-w-sm bg-white/10 backdrop-blur-lg rounded-2xl px-6 py-10 flex flex-col gap-y-5">
            <input className="bg-[#D9D9D9] w-full h-12 rounded-lg px-3 text-black" />
            <textarea className="bg-[#D9D9D9] w-full h-48 rounded-lg p-3 text-black" />
            <button className="bg-blue-300/10 py-2 rounded-lg text-blue-200 hover:bg-blue-400/10 cursor-pointer">Sent Message</button>

            <div className="flex-1 flex flex-row justify-center">
              <div className="flex space-x-4">
                {[
                  {
                    name: "GitHub",
                    icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z",
                  },
                  {
                    name: "LinkedIn",
                    icon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/30 transform hover:scale-110 transition-all duration-300"
                    title={social.name}
                  >
                    <svg
                      className="w-5 h-5 text-[#fff]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="w-full bg-[#202021] text-center py-5 border-t border-t-white/10 pb-20">
        <p className="text-sm text-[#6F6F6F]">© 2024 Amritpal Singh. All rights reserved.</p>
      </footer>

    </div>
  )
}