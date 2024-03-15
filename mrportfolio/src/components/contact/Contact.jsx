import React from 'react';

import ContactLeft from './ContactLeft';
 import { useState } from 'react';
import Title from '../layout/Title';

function Contact() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

   
  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================


   
  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      
    }
  };
  return (
    <section       id="contact" className="w-full py-20 border-b-[1px] border-b-black  ">
<div>
    <Title title="Contact With Me" />
</div>
<div>
<div className=' w-full '>
<div className=' w-full h-auto flex lgl:flex-row justify-between'>
<ContactLeft/>
<div className=' w-full lgl:w-[60%] h-full  py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4
   lgl:p-8   rounded-lg shadow-shadowOne mt-2 flex flex-col gap-8 '>



<form  className=' w-full flex flex-col lgl:gap-6 gap-4 py-2 lgl:py-4' >
{errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}


   <div className=' w-full  flex flex-col  lgl:flex-row  gap-10'>
   <div className=' w-full lgl:w-1/2 flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>Your Name</p>
<input className={`${errMsg==="Username is required" && "outline-designColor"} w-full h-12 rounded-lg border-b-[1px] border-b-gray-600
 bg-[#172436] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
 focus-visible:border-b-transparent duration-300`}
  type="text"
  onChange={(e)=>setUsername(e.target.value)} 
  value={username}

   />
    </div>
    <div className=' w-full lgl:w-1/2 flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>Phone Number</p>
<input className='w-full h-12 rounded-lg border-b-[1px] border-b-gray-600
 bg-[#172436] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
 focus-visible:border-b-transparent duration-300'
  type="text" onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} />
    </div>
   </div>
   <div className='  flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>Email</p>
<input className='w-full h-12 rounded-lg border-b-[1px] border-b-gray-600
 bg-[#172436] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
 focus-visible:border-b-transparent duration-300' type="email"
 onChange={(e)=>setEmail(e.target.value)} value={email} />
    </div>
    <div className='  flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>Subject</p>
<input className='w-full h-12 rounded-lg border-b-[1px] border-b-gray-600
 bg-[#172436] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none 
 focus-visible:border-b-transparent duration-300' type="text"
  onChange={(e)=>setSubject(e.target.value)} value={subject} />
    </div>
    <div className='  flex flex-col gap-4'>
<p className=' text-sm text-gray-400 uppercase tracking-wide'>Message</p>
<textarea  cols="30" rows="10" className=" w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#172436] text-lightText px-4 py-2 active:outline-none
  focus-visible:outline-designColor outline-none focus-visible:border-b-transparent
   duration-300 resize-none " onChange={(e)=>setMessage(e.target.value)} value={message} > </textarea>
 
    </div>
    <div>
       <button className=' w-full h-12 bg-[#364c8e] rounded-lg text-base hover:bg-[#132355]
        text-gray-400 tracking-wider uppercase hover:text-white duration-300 
       hover:border-[1px] hover:border-designColor border-transparent'onClick={handleSend} >Send Message</button>
    </div>
    {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
                 shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024]
                 to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
</form>
</div>

</div>

</div>
</div>
    </section>
  )
} 

export default Contact