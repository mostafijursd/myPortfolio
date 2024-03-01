import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
function Banner() {
  const [text] = useTypewriter({
    words: ["React Developer.", "Full Stack Developer." ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <section id='home' className='w-full  py-20  flex items-cente
     border-b-[1px] font-titleFont border-b-black'>

<div className=' w-1/2 flex flex-col gap-20'>
  <div className=' flex flex-col gap-3'>
    <h4 className=' text-lg italic font-normal'>  Welcome To My World</h4>
    <h1 className=' text-6xl font-bold capitalize'>Hi , I'm {" "}
    <span  className=' text-cyan-600 capitalize'>Mostafijur Rahaman</span>
    </h1>
    <h2 className=' text-4xl font-bold text-white'> <span className=''>{text}
    <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
            />
    
    </span>
      </h2>
      <p className=' text-base font-bodyFont leading-6 tracking-wide'>
      Hello, I'm Mostafijur Rahman, a React Js developer originally from West Bengal, India. Graduating with Honors in Mathematics from Calcutta University in 2021, I transitioned from a teaching profession to embark on a self-learning journey in software development. Over ten months, I utilized online resources such as YouTube and the internet to master various technologies, including HTML5, CSS3, JavaScript, React Js, Next.js, TypeScript, tailwindcss, Node.js, Express.js , MongoDB, Git and Github. By working on projects like Amazon Clone and Social Media Clone, I've honed my skills and developed a passion for problem-solving. Now, fully prepared and enthusiastic,
       I am eager to contribute to innovative software solutions.
      </p>
  </div>
  <div>
    <h2 className=' text-base uppercase font-bodyFont mb-4'> Find me in </h2>
    <div className="flex gap-4">
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300"
    
>
              <FaFacebook/>
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300">
              <FaSquareXTwitter />
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300">
              <FaLinkedin />
            </span>
          </div>
  </div>
</div>

<div className=' w-1/2'></div>

    </section>
  )
}

export default Banner;