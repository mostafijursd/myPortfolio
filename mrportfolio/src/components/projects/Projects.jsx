import React from 'react'

import ProjectsCard from './ProjectsCard';
import { amazonOne, projectForu, projectThree, projectTwo } from '../../assets';
import Title from '../layout/Title';

function Projects() {
  return (
    <section id='projects' className='w-full  py-20 border-b-[1px]
    border-b-black'>


<div  className=' flex justify-center items-center text-center'>
< Title title="Projects" />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14  ">
  <ProjectsCard title="E-commerce Website" src={amazonOne} des="I created a full-stack 
  Amazon clone using React.js, Tailwind CSS, Redux, Material-UI, Axios, and Firebase. The Amazon Clone will allow
   users to add products, sign in, and log in, among other functionalities."  />
  <ProjectsCard title="Socal-Media" src={projectTwo}des="I created a full-stack 
   Socal-Media using React.js, Tailwind CSS, Redux, Material-UI, Axios,  The Socal-Media  The will allow
   users to add products, sign in, and log in, among other functionalities." />
  <ProjectsCard title="Coming Soon" src={projectThree} />
  <ProjectsCard  title="Coming Soon" src={projectThree} />
  <ProjectsCard title="Coming Soon" src={projectForu}  />
  <ProjectsCard title="Coming Soon" src={projectForu} />
  

</div>

   </section>
  )
}
 
export default Projects