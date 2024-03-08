import React from 'react';
import Title from '../skills/Title';
import ResumeCard from '../resume/ResumeCard';
import {motion} from "framer-motion"
function Experience() {
  return (
    <section id='experience'  className=" w-full  py-20 flex  flex-col  border-b-[1px]
    border-b-black">
 <div className=' flex justify-center items-center'>
    <Title title="Experience"/>
    </div>
<div
   
    >
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des=""
          />
          <ResumeCard
            title=""
            subTitle=""
            result=""
            des=""
          />
        </div>
      </div>
 
    </section>
  )
}

export default Experience