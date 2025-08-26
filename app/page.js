
import Project from "@/components/Project"
import Skills from "@/components/Skills"
import SocialContacts from "@/components/SocialContacts"

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
        <div className="w-full pt-14 pb-24 flex flex-col gap-5">
          <div className="w-full flex flex-col">
            <h1 className="text-3xl font-bold">Amritpal Singh</h1>
            <h1 className="text-xl font-semibold -mt-2 text-[#6F6F6F]">Web Developer</h1>
          </div>

          <div className="flex xl:flex-row flex-col gap-10">

            <SocialContacts />

            <div className="flex-1">
              Hi, I’m Amrit – a budding web developer passionate about crafting sleek, functional, and user-friendly digital experiences. Exploring the MERN stack and beyond, I love turning ideas into interactive reality.
            </div>
          </div>
        </div>
      </header>

      {/* main */}
      <main className="flex flex-col max-w-dvw bg-[#2C2C2C] py-10">

        <div className="flex flex-col gap-10 mb-20 relative">
          <Skills />
          <div className="-mt-24 flex-1 flex flex-col gap-3  min-[1000px]:px-64 min-[600px]:px-20 px-10">
            <h2 className="pb-2 text-xl font-bold text-[#93B5FF]">Services</h2>
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

        <div className="flex flex-wrap justify-around gap-y-10 pb-10  min-[1000px]:px-64 min-[600px]:px-10 px-5">

          {projects.map(project => {
            return <Project key={project.domain} project={project} />
          })}

        </div>

      </main>
    </div>
  )
}