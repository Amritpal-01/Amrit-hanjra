import React from 'react'
import DirectContact from './DirectContact'
import { Mail } from 'lucide-react'

const Contact = () => {
  return (
    <div className='pt-10'>


      <div className='max-w-4xl w-full px-4 pt-8 relative mx-auto'>
        <div className='h-[1px] bg-gray-400 width-transition'></div>
        <h1 className='text-lg julius text-black'>Contact</h1>
      </div>

      <section className=" flex lg:flex-row flex-col items-center w-full min-[1300px]:px-52 px-10 sm:pt-10 overflow-hidden pb-10 -translate-y-full-animation">

        <div className=" lg:w-[50%] w-full flex flex-col justify-center items-center m-5">

          <div className="julius flex flex-col py-2 sm:pl-8 ">
            <h1 className=" text-6xl font-bold leading-20 max-[1200px]:leading-12 py-1 max-[1200px]:text-4xl text-black ">DON&apos;T BE <br />A STRANGER</h1>
            <h2 className="text-2xl max-[1200px]:text-xl ">LETS CREATE SOMETHING MEANINGFULL</h2>
          </div>

          <div className="bg-black/10 h-[2px] w-full max-w-md" />

          <h3 className="w-full max-w-md py-2 sm:px-14 flex items-center "><Mail className="mr-2 h-5 w-5 text-blue-400 " /> amritpalonly13571@gmail.com</h3>

        </div>

        <div className="flex flex-1 justify-center ">
          <DirectContact />
        </div>

      </section>

      <footer className="w-full text-center py-5 border-t border-t-white/10 pb-20 ">
        <p className="text-sm text-[#6F6F6F]">© 2024 Amritpal Singh. All rights reserved.</p>
      </footer>



    </div>
  )
}

export default Contact