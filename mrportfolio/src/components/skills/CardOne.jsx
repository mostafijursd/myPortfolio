import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
function CardOne({title}) {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg 
    shadow-shadowOne flex items-center bg-gradient-to-r
     from-bodyColor to-[#202327] group hover:bg-gradient-to-b
      hover:from-black
     hover:to-[#1e2024] transition-colors duration-100 group">
<div className=' flex flex-col gap-4'>
    <div>
    <h2 className=' text-3xl font-titleFont font-bold text-gray-300'>{title}</h2>
</div>
<div>
  <div className=' gap-2'>
<p className=' flex justify-between text-2xl' >HTML5 <span ><FaHtml5/></span></p>
    
    <p className=' flex justify-between text-2xl '>CSS3 <span  ><FaCss3Alt/></span></p>
    <p className=' flex justify-between  text-2xl'> JavaScript <span >< IoLogoJavascript/></span></p>
    <p className=' flex justify-between  text-2xl'  >React js <span > <FaReact/></span></p> 
    <p className=' flex justify-between  text-2xl'>Next js <span > <SiNextdotjs/></span></p>
   
    <p className=' flex justify-between  text-2xl'>TypeScipt <span > <SiTypescript/></span></p>
    <p className=' flex justify-between  text-2xl'>Tailwindcss <span > <SiTailwindcss/></span></p>
     <p className=' flex justify-between  text-2xl gap-4'> Git & gitHub <span > <FaGithub/></span></p>
    </div>
</div>

</div>

    </div>
    
  )
}

export default CardOne;