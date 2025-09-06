"use client"
import About from '@/components/About';
import DirectContact from '@/components/DirectContact';
import Header from '@/components/Header'
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Notify from '@/functions/Notifications/notify';
import { Mail } from 'lucide-react';



export default function Home() {


  return (
    <div className='relative flex flex-col'>

      <Notify />

      <Navbar />

      <div id='home' className='fixed top-0 left-0 z-0 w-full h-dvh overflow-hidden'>
        <Header />
      </div>

      <div className='h-dvh' />

      <main className='bg-[#f0f9f9] z-10 rounded-t-4xl lg:rounded-t-[60px] relative max-w-dvw'>

        <div id="about" className='w-full flex justify-center radial-bg-B5E2F0 relative'>

          <About />
        </div>

        <div id="skills">
          <Skills />
        </div>

        {/* contact  */}

         <div className='max-w-4xl w-full px-4 pt-8 relative mx-auto'>
          <div className='w-full h-[1px] bg-gray-400'></div>
          <h1 className='text-lg julius text-black'>Contact</h1>
        </div>

        <section className=" flex lg:flex-row flex-col items-center w-full min-[1300px]:px-52 px-10 sm:pt-10 overflow-hidden pb-10 translate-x-animation">
          <div className="lg:w-[50%] w-full flex flex-col justify-center items-center m-5">
            <div className="julius flex flex-col py-2 sm:pl-8">
              <h1 className=" text-6xl font-bold leading-20 max-[1200px]:leading-12 py-1 max-[1200px]:text-4xl text-black ">DON&apos;T BE <br />A STRANGER</h1>
              <h2 className="text-2xl max-[1200px]:text-xl ">LETS CREATE SOMETHING MEANINGFULL</h2>
            </div>
            <div className="bg-black/10 h-[2px] w-full max-w-md" />
            <h3 className="w-full max-w-md py-2 sm:px-14 flex items-center"><Mail className="mr-2 h-5 w-5 text-blue-400" /> amritpalonly13571@gmail.com</h3>
          </div>
          <div className="flex flex-1 justify-center">
            <DirectContact />
          </div>
        </section>

        <footer className="w-full bg-[#ffffff] text-center py-5 border-t border-t-white/10 pb-20">
          <p className="text-sm text-[#6F6F6F]">© 2024 Amritpal Singh. All rights reserved.</p>
        </footer>

      </main>



    </div>
  );
}
