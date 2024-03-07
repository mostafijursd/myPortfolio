import React from 'react'
import Title from '../skills/Title'
import ResumeCard from './ResumeCard'
function Resume() {
  return (
 <section id='resume'  className="w-full py-20 border-b-[1px] border-b-black">
<div className="flex justify-center items-center text-center">
        <Title title="My Resume"  />
      </div>
<div>
  <ul className=' w-full grid grid-cols-4 gap-4'>
  <li className=' w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center *
 cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-full'>Eduction </li>
  <li className=' w-full h-20 bg-black bg-opacity-25 text-xl text-gray-300 flex justify-center *
 cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-full'>Professional Skill</li>
  </ul>
  </div>
  <div className=' py-12 font-titleFont gap-4'>
    <p className=' text-sm text-designColor tracking-[4px]'>2008-2021</p>
    <h2 className=' text-4xl font-bold'>Eduction Quality</h2>
  </div>
  <div className="mt-6  w-full
   h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 ">
    <ResumeCard    title="B.Sc in Mathematics"
            subTitle="University of Calcutta (2018 - 2021)"
            result="India"
            des="The training provided by universities in order to prepare
             people to work in various sectors of the economy or areas of culture."/>
    <ResumeCard />
    <ResumeCard />

  </div>
 </section>
  )
}

export default Resume