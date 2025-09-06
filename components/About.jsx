import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='max-w-4xl w-full h-vh md:h-dvh flex lg:flex-row flex-col md:px-4 px-8 not-md:pb-20 gap-6 '>


            {/* text */}
            <div className='flex-1 h-full flex flex-col justify-center gap-4 py-12'>
                <h1 className='md:text-3xl text-2xl font-bold bg-gradient-to-r from-black from-10% to-50% to-[#004ea8] bg-clip-text text-transparent'>
                    I Build Responsive And Dynamic Web Applications
                </h1>
                <h2 className='md:text-xl text-lg'>Let’s turn ideas into solutions for real-world problems with the incredible power of computer programming.</h2>
            </div>

            {/* image */}
            <div className='flex h-full flex-1 flex-row justify-center items-center gap-2'>
                <div className='h-80 w-36 bg-gray-100 rounded-xl shadow-2xl relative overflow-hidden shadow-black/50 translate-y-animation'>
                    <Image
                        src={"/AboutImg1.png"}
                        alt='aboutImg'
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='h-80 w-36 bg-gray-100 rounded-xl shadow-2xl relative overflow-hidden shadow-black/50 -translate-y-animation '>
                    <Image
                        src={"/AboutImg2.png"}
                        alt='aboutImg'
                        fill
                        className='object-cover'
                    />
                </div>
                <div className='h-80 w-36 bg-gray-100 rounded-xl shadow-2xl relative overflow-hidden shadow-black/50 translate-y-animation'>
                    <Image
                        src={"/AboutImg3.png"}
                        alt='aboutImg'
                        fill
                        className='object-cover'
                    /></div>
            </div>
        </div>
    )
}

export default About