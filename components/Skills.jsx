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

  const handleSkillScroll = async (scrollY, viewHeight, skillSectionInit) => {
    const currentSkillScrollHeight = scrollY - skillSectionInit;
    const remainder = currentSkillScrollHeight % viewHeight;

    let scrollH;

    if (remainder > viewHeight / 3) {
      scrollH = skillSectionInit + currentSkillScrollHeight + viewHeight - remainder;
    } else {
      scrollH = skillSectionInit + currentSkillScrollHeight - remainder;
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
    if (window.innerWidth <= 768) return;
    let skillSectionInit = window.innerHeight * 2;

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (!isMobile) {
      let scrollTimeout;

      document.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
          const scrollY = window.scrollY;
          const viewHeight = window.innerHeight;

          if (
            scrollY > skillSectionInit &&
            scrollY < skillSectionInit + viewHeight * 3.5
          ) {
            handleSkillScroll(scrollY, viewHeight, skillSectionInit);
          }
        }, 50);
      });
    }
  }, [])


  return (
    <div className='max-w-4xl w-full flex flex-col not-md:gap-20 p-4 mx-auto relative'>

      <div className='sticky top-20 w-full md:flex hidden'>
          <div className='w-full relative'>
            <div className='w-full h-[1px] bg-gray-400'></div>
            <h1 className='text-lg julius text-black'>Skills</h1>
          </div>
        </div>

      <div className='flex flex-row '>
        <div className='flex-1 flex flex-col not-md:gap-y-14'>
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

        <div className='flex-1 md:flex hidden'>

          <div className='sticky top-0 h-dvh w-full flex items-center'>
            <div className='w-full aspect-square bg-gray-400 shadow-2xl shadow-[#aae4f6] rounded-lg relative overflow-hidden'>
              <Image
                src={sectionsData[currentSkill].thumbnail}
                alt="image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>


      </div>

    </div>


  )
}

export default Skills