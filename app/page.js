"use client"
import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header'
import Navbar from '@/components/Navbar';
import Skills from '@/components/Skills';
import Notify from '@/functions/Notifications/notify';



export default function Home() {


  return (
    <div className='relative flex flex-col'>
      <div id="home"/>

      <Notify />

      <Navbar />

      <div className='fixed top-0 left-0 z-0 w-full h-dvh overflow-hidden'>
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

        <div id="contact">
          <Contact/>
        </div>

      </main>
    </div>
  );
}
