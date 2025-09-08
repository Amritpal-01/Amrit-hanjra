"use client"
import React from 'react'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SkillSection from '@/components/skillCard';

const Skills = () => {

  const sectionsData = [
    {
      title: "Programming/",
      subtitle: "Frontend Frameworks",
      description: "Frontend frameworks are tools that simplify building web interfaces. Here are the ones I use.",
      skills: ["JavaScript (ES6+)", "C++/ C", "React.js/ React-native", "Next.js"],
      thumbnail: "/web.jpg"
    },
    {
      title: "Backend/",
      subtitle: "Databases",
      description: "Backend frameworks help build server-side logic and APIs. Here are the ones I use.",
      skills: ["Node.js/ Express.js", "MongoDB/ Postgre"],
      thumbnail: "/backend.jpg"
    },
    {
      title: "Core Strength",
      subtitle: null,
      description: "Core strengths are the fundamental skills that shape my programming journey.",
      skills: ["Data Structures & Algorithms (DSA)", "Problem Solving", "Object-Oriented Programming (OOP)", "Clean Code Practices"],
      thumbnail: "/leetcode.png"
    },
    {
      title: "Tools/",
      subtitle: "Others",
      description: "Tools and others are the technologies I use to support development.",
      skills: ["Git & GitHub", "Firebase", "VS Code", "Postman", "Figma", "Android Studio", "Adobe"],
      thumbnail: "/music.jpg"
    }
  ];

  const [currentSkill, setCurrentSkill] = useState(0)

  const handleSkillScroll = async (scrollY, viewHeight, distanceFromTop) => {

    const currentSkillScrollHeight = scrollY - distanceFromTop;
    const remainder = currentSkillScrollHeight % viewHeight;

    let scrollH;

    if (remainder > viewHeight / 2) {
      scrollH = distanceFromTop + currentSkillScrollHeight + viewHeight - remainder;
    } else {
      scrollH = distanceFromTop + currentSkillScrollHeight - remainder;
    }

    document.documentElement.scrollTo({
      top: scrollH,
      behavior: 'smooth'
    })

    let a = currentSkillScrollHeight;
    let i = 0;

    while (true) {
      if (a > viewHeight / 2 && a < viewHeight) {
        i++;
        break;
      }
      if (a < viewHeight / 2) {
        break;
      }

      a -= viewHeight;
      i++;
    }

    setCurrentSkill(i);

    return;
  }

  useEffect(() => {
    // const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    //  if(!isMobile){
    let scrollTimeout;

    document.addEventListener("scroll", () => {
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const distanceFromTop = document.querySelector("#skillStart").getBoundingClientRect().top + window.scrollY;
        const scrollY = window.scrollY;
        const viewHeight = window.innerHeight;

        if (
          scrollY > distanceFromTop &&
          scrollY < distanceFromTop + viewHeight * 3.5
        ) {
          handleSkillScroll(scrollY, viewHeight, distanceFromTop);
        }
      }, 50);
    });
    //  }


    // document.addEventListener("touchend", () => {
    //   const scrollY = window.scrollY;
    //   const viewHeight = window.innerHeight;

    //   console.log("touchend")

    //   if (
    //     scrollY > distanceFromTop &&
    //     scrollY < distanceFromTop + viewHeight * 3.5
    //   ) {
    //     handleSkillScroll(scrollY, viewHeight, distanceFromTop);
    //   }

    // });

  }, [])


  useEffect(() => {
    const imageScrolls = document.querySelectorAll("#imageScroll");

    imageScrolls.forEach(imageScroll => {
      imageScroll.scrollTo({
        top: currentSkill * 416,
        behavior: 'smooth'
      })
    })
  }, [currentSkill])

  return (
    <div className='max-w-4xl w-full flex flex-col not-md:gap-20 p-4 mx-auto relative'>

      <div className='w-full flex md:hidden'>
        <div className='w-full relative'>
          <div className='h-[1px] bg-gray-400 width-transition'></div>
          <h1 className='text-lg julius text-black'>Skills</h1>
        </div>
      </div>

      <div className='sticky top-20 w-full md:flex hidden'>
        <div className='w-full relative'>
          <div className='h-[1px] bg-gray-400 width-transition'></div>
          <h1 className='text-lg julius text-black'>Skills</h1>
        </div>
      </div>

      <div id='skillStart' className='flex flex-row not-md:-mt-20'>

        <div className='flex-1 flex flex-col relative'>
          {sectionsData.map((section, index) => (
            <SkillSection
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              description={section.description}
              skills={section.skills}
              thumbnail={section.thumbnail}
            />
          ))}
        </div>
        {/* pc comp  */}
        <div className='flex-1 md:flex hidden'>
          <div className='sticky top-0 h-dvh flex items-center '>
            <div id="imageScroll" data-height="416px" className='w-[416px] h-[416px] overflow-hidden'>
              {sectionsData.map((section, idx) => (
                <div key={idx} className='min-w-full min-h-full bg-gray-400 shadow-2xl shadow-[#aae4f6] rounded-lg relative overflow-hidden'>
                  <Image
                    src={section.thumbnail}
                    alt="image"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Skills