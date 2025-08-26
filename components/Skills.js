"use client"
import NextjsIcon from '@/icons/nextjsIcon'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "motion/react"

const Skills = () => {
    const [MernActive, setMernActive] = useState(false)
    const skillRef = useRef([])

    useEffect(() => {
        const slider = document.getElementById("slider");
        if (slider) {
            slider.style.setProperty("--quantity", 10);
        }

        const mern = document.getElementById("mern");

        mern.addEventListener("mouseenter", () => {
            setMernActive(true)
        })
        mern.addEventListener("click", () => {
            setMernActive(!MernActive)
        })
        mern.addEventListener("mouseleave", () => {
            setMernActive(false)
        })
    }, []);


    useEffect(() => {
        let animationFrameId;

        const trackRotation = () => {
            skillRef.current.forEach((skill) => {
                if (skill) {
                    const computedStyle = window.getComputedStyle(skill);
                    const transform = computedStyle.transform;


                    if (transform && transform !== 'none') {
                        const values = transform.split('(')[1].split(')')[0].split(',');

                        // For 3D rotation (matrix3d)
                        if (values.length === 16) {
                            const m11 = parseFloat(values[0]);
                            const m13 = parseFloat(values[2]);
                            const angleY = Math.atan2(m13, m11) * (180 / Math.PI);

                            // Normalize angle to 0–360
                            const normalizedAngle = (angleY + 360) % 360;

                            // console.log(normalizedAngle)

                            // Adjust z-index based on angle
                            if (normalizedAngle > 90 && normalizedAngle < 270) {
                                skill.style.zIndex = "0";
                            } else {
                                skill.style.zIndex = "20";
                            }
                        }
                    }
                }
            });

            animationFrameId = requestAnimationFrame(trackRotation);
        };

        trackRotation();

        return () => cancelAnimationFrame(animationFrameId);
    }, [skillRef]);



    return (
        <div id='banner' className='w-full h-[450px] pt-10 text-center relative -mt-20 overflow-hidden'>
            <div id='slider' style={{ '--quantity': 10 }} className='absolute flex items-center justify-center w-[100px] h-[125px] top-[30%] left-1/2 -translate-x-1/2 transform-3d prospective-1000'>
                {[...Array(10)].map((_, i) => (
                    <div
                        ref={(el) => (skillRef.current[i] = el)}
                        key={i}
                        id="item"
                        style={{ "--position": i + 1 }}
                        className="absolute inset-0 bg-[#333333] rounded-2xl hover:scale-110 transition-all duration-300"
                    ></div>
                ))}
                <div id='mern' className={`absolute transition-all duration-300 ${MernActive && "-translate-y-16"}`}>
                    <div className="flex flex-col items-center text-center overflow-hidden relative">
                        <div className="bg-[#171717] w-80 h-12 file-back">
                        </div>
                        <div id="file" className={`absolute w-64 h-52 up bg-[#B6B6B6] rounded-2xl mx-8 ${MernActive?"":"translate-y-5"} translate-x-4 transition-all duration-300`}></div>
                        <div id="file2" className={`absolute w-64 h-52 bg-white rounded-2xl mx-8 ${MernActive?"translate-y-5":"translate-y-7"} transition-all duration-300`}></div>
                        <div className="w-80 h-48 bg-[#202020] rounded-b-2xl rounded-tr-2xl flex items-center justify-center relative">
                            <NextjsIcon />
                            <Image
                                className="absolute"
                                width={300}
                                height={30}
                                src={"/mern-stack.png"}
                                alt="img"
                            />
                            <Image
                                className="absolute right-2 bottom-2"
                                width={25}
                                height={25}
                                src={"/js.png"}
                                alt="img"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills