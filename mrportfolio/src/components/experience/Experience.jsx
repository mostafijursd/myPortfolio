import React from 'react';

import ResumeCard from '../resume/ResumeCard';
import {motion} from "framer-motion"
import Title from '../layout/Title';
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
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black
         border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Math Teacher (Guest )"
            subTitle="MSK (Part-time)"
            result="India"
            des="I am highly proficient in employing educational discipline techniques to create a conducive learning environment for students. Additionally, I implement
             various strategies to foster their interest and engagement in mathematics."
          />
          <ResumeCard
            title="Math Teacher"
            subTitle="Al-Ameen Mission (Full-time)  "
            result="India"
            des="I excel at cultivating a positive and inclusive learning environment for students, adept at evaluating their
             progress and offering tailored support to ensure their academic achievements."
          />
          {/* <ResumeCard
            title=""
            subTitle=""
            result=""
            des=""
          /> */}
        </div>
      </div>
 
    </section>
  )
}

export default Experience