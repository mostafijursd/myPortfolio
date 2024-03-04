import React from 'react';
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
function Card({title}) {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
<div className=' flex flex-col gap-4'>
    <div>
    <h2 className=' text-3xl font-titleFont font-bold text-gray-300'>{title}</h2>
</div>
<div>
   <div className=' gap-2'>
<p  className=' flex justify-between text-2xl'>Node js <span><FaNodeJs/></span></p>
<p  className=' flex justify-between text-2xl'>Express js <span><SiExpress/></span></p>
<p  className=' flex justify-between text-2xl'>MongoDB <span><SiMongodb/></span></p>
<p  className=' flex justify-between text-2xl'>Firebase <span><IoLogoFirebase/></span></p>
<p  className=' flex justify-between text-2xl'> <span></span></p>

   </div>
</div>

</div>


    </div>
    
  )
}

export default Card