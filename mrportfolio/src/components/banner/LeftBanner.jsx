import React from 'react';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import {Bio} from '../../constants'

function LeftBanner() {
    
    const [text] = useTypewriter({
        words: ["React Js Developer.", "Full Stack Developer." ," Frontend Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
  return (
    <div className=' w-full  lgl:w-1/2 flex flex-col gap-20'>
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
  <div className=' flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
  <div className=''>
    <h2 className=' text-base uppercase font-bodyFont mb-4'> Find me in </h2>
    <div className="flex gap-4">
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300">
  <a href={Bio.facebook} target='_blank' > 
 <FaFacebook /></a>

             
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300">
             <a href={Bio.twitter} target='_blank'><FaSquareXTwitter /></a> 
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300"  >
             <a href={Bio.linkedin}
              target='_blank'>  <FaLinkedin  /></a>
              
                
            
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300"  >
              <a href={Bio.github} target='_blank'> <FaGithub/></a>
            </span>
          </div>
  </div>
  <div>
    <h2 className=' text-base uppercase font-titleFont mb-4'>BEST SKILL ON </h2>

    <div className="flex gap-4">
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300"  >
              <FaReact />
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300"  >
              <RiJavascriptFill />
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300"   >
              <TbBrandNextjs/>
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300"   >
              <BiLogoTailwindCss />
            </span>
          </div>
          </div>
  </div>
</div>
  )
}

export default LeftBanner;