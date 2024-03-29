import React from 'react'
import { contactImg } from '../../assets/index';
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Bio } from '../../constants';
function ContactLeft() {
  return (
    <div className=' w-full  lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8
    rounded-lg shadow-shadowOne mt-2 flex flex-col gap-8 justify-center  '>
        <img src={contactImg}  className=' w-full h-64 object-cover rounded-lg mb-2'/>
        <div className=' flex flex-col gap-4'>
         <h3 className=' text-3xl font-bold text-white'>Mostafijur Rahaman</h3>
        <p className=' text-lg font-normal text-gray-400'>React js Developer</p>
        <p className=' text-base text-gray-400 tracking-wide'>Kolkata, West Bengal, India 
         </p>
         <p className=' text-base text-gray-400 flex items-center gap-2'> Phone : 
         <span className=' text-lightText'>+91 6294356368</span></p>
         <p className=' text-base text-gray-400 flex items-center gap-2'>Email { " "} : 
         <span className=' text-lightText'>mostafijur@coding.com</span></p>
         <div className=' flex gap-3 flex-col'>
           <h3 className=' text-base uppercase '> Find me </h3>
           <div className=' flex gap-4'>
           <span className="w-10 h-10 bg-blue-800 bg-opacity-25
                text-gray-200 text-xl inline-flex items-center 
                justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
                hover:-translate-y-1 transition-all hover:text-designColor
                 cursor-pointer duration-300"  >
                
                <a href={Bio.linkedin} target='_blank' >
                    <FaLinkedin  /></a>
               </span>
               <span className="w-10 h-10 bg-blue-800 bg-opacity-25
                text-gray-200 text-xl inline-flex items-center 
                justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
                hover:-translate-y-1 transition-all hover:text-designColor
                 cursor-pointer duration-300"  >
                
                <a href={Bio.facebook}  target='_blank'  > 
                 <FaFacebook /></a>
               </span>
               <span className="w-10 h-10 bg-blue-800 bg-opacity-25
                text-gray-200 text-xl inline-flex items-center 
                justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
                hover:-translate-y-1 transition-all hover:text-designColor
                 cursor-pointer duration-300"  >
                
                <a href={Bio.twitter}  target='_blank'  ><FaSquareXTwitter /></a> 
               </span>
               
           </div>
         </div>
        </div>
   </div>
  )
}

export default ContactLeft;