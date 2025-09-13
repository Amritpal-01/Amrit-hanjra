"use client"
import About from '@/components/About';
import Contact from '@/components/Contact';
import Header from '@/components/Header'
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import ProjectsQ from '@/components/ProjectsQ';
import Skills from '@/components/Skills';
import { useNavigation } from '@/contexts/NavigationContext';
import Notify from '@/functions/Notifications/notify';
import { useEffect, useRef } from 'react';



export default function Home() {
  const sections = useRef([])
  const { setSelectionState} = useNavigation()

  useEffect(() => {
    if(!sections.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        const type = entry.target.id;
        const state = entry.isIntersecting;

        setSelectionState(prevSelections => 
        prevSelections.map((currentSelection) => 
          currentSelection.type === type
            ? { ...currentSelection, state }  // Return a new object with updated state
            : currentSelection               // Keep others unchanged
        ));

      })
    }, {})

    
    sections.current.forEach(section => {
      observer.observe(section)
    })
  }, [sections])

  return (
    <div className='relative flex flex-col'>
      <div id="home" />

      <Notify />

      <Navbar />

      <div className='fixed top-0 left-0 z-0 w-full h-screen overflow-hidden'>
        <Header />
      </div>


      <div ref={(el) => (sections.current[0] = el)} id="home" className='h-screen' />

      <div id='homeEnd' />

      <main className='bg-[#f0f9f9] z-10 rounded-t-4xl lg:rounded-t-[60px] relative max-w-dvw mt-24'>

        <div ref={(el) => (sections.current[1] = el)} id="about" className='w-full flex justify-center radial-bg-B5E2F0 relative mb-10'>
          <About />
        </div>

        <div ref={(el) => (sections.current[2] = el)} id="skills">
          <Skills />
        </div>

        <div ref={(el) => (sections.current[3] = el)} id='projects'>
          <ProjectsQ />
        </div>

        <div ref={(el) => (sections.current[4] = el)} id="contact" className='mt-12'>
          <Contact />
        </div>

      </main>
    </div>
  );
}
