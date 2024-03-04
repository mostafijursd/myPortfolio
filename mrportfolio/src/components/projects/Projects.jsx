import React from 'react'
import Title from '../skills/Title'
import ProjectsCard from './ProjectsCard';

function Projects() {
  return (
    <section id='projects' className=' w-full h-[800px] py-20   border-b-[1px]
    border-b-black '>


<div  className=' flex justify-center items-center text-center   '>
<Title title="Projects" />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
  <ProjectsCard title="E-commerce Website" />
  <ProjectsCard />
  <ProjectsCard />
  <ProjectsCard />
  <ProjectsCard />
  <ProjectsCard />
  

</div>

   </section>
  )
}
 
export default Projects