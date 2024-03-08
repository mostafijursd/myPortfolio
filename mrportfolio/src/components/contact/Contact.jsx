import React from 'react';
import Title from '../skills/Title';
import ContactLeft from './ContactLeft';
 import { useState } from 'react';

function Contact() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

   const handleSend=(e)=>{
    e.preventDefault();
    console.log(username);
   }
  return (
    <section       id="contact" className="w-full py-20 border-b-[1px] border-b-black  ">
<div>
    <Title title="Contact With Me" />
</div>
<div>
<div className=' w-full '>
<div className=' w-full h-auto flex justify-between'>
<ContactLeft/>
<div className='w-[60%] h-full  py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8
    rounded-lg shadow-shadowOne mt-2 flex flex-col gap-8 '>



<form  className=' w-full flex flex-col gap-8' onSubmit={handleSend}>
   <div className=' flex w-full  gap-10'>
   <div className=' w-1/2 flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>YOUR NAME</p>
<input className='w-full h-12 rounded-lg border-b-[1px] border-b-gray-600
 bg-[#172436] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
 focus-visible:border-b-transparent duration-300' type="text" onChange={(e)=>setUsername(e.target.value)} />
    </div>
    <div className=' w-1/2 flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
<input className='w-full h-12 rounded-lg border-b-[1px] border-b-gray-600
 bg-[#172436] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
 focus-visible:border-b-transparent duration-300' type="text" />
    </div>
   </div>
   <div className='  flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>Email</p>
<input className='w-full h-12 rounded-lg border-b-[1px] border-b-gray-600
 bg-[#172436] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
 focus-visible:border-b-transparent duration-300' type="email" />
    </div>
    <div className='  flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
<input className='w-full h-12 rounded-lg border-b-[1px] border-b-gray-600
 bg-[#172436] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
 focus-visible:border-b-transparent duration-300' type="text" />
    </div>
    <div className='  flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>Message</p>
<textarea  cols="30" rows="10" className=' w-full rounded-lg border-b-[1px] border-b-gray-600 
bg-[#172436]
 text-lightText px-4 py-2 active:outline-none
  focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none'></textarea>
    </div>
    <div>
       <button className=' w-full h-12 bg-[#364c8e] rounded-lg text-base hover:bg-[#132355]
        text-gray-400 tracking-wider uppercase hover:text-white duration-300 
       hover:border-[1px] hover:border-designColor border-transparent'>Send Message</button>
    </div>
</form>
</div>

</div>

</div>
</div>
    </section>
  )
} 

export default Contact