import React from 'react';
import ProjectsCard from './ProjectsCard';
import { airbnbImg, amazonOne, nextauthImage, projectForu, projectThree, projectTwo } from '../../assets';
import Title from '../layout/Title';
import { Bio } from '../../constants';

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
   users to add products, sign in, and log in, among other functionalities."
    href={Bio.amazonClone} />
  <ProjectsCard title="Socal-Media" src={projectTwo}
   des="I created a full-stack social media platform using React.js,
    Tailwind CSS, React-Redux, and React-icons. The platform allows users to add products,
   sign in, log in, and enjoy other functionalities."/>
  <ProjectsCard title="NextAuth Signup page" src={nextauthImage}
   des="Welcome! Explore our guide for top-notch React coming soon 
   page templates for your project!" href={Bio.nextauth} />
  <ProjectsCard  title="Airbnb-clone" src={airbnbImg} 
   des="I've recently had the opportunity to dive deep into Full Stack development while working on an Airbnb clone project 🌍. This journey has been incredibly 
   rewarding as I got hands-on experience with some amazing technologies." href={Bio.airbnbClone} />
  
  <ProjectsCard title="Coming Soon" src={projectForu} 
   des="Welcome! Explore our guide for top-notch
   React coming soon page templates for your project!" />
  <ProjectsCard title="Coming Soon" src={projectForu} 
  des=" Welcome! Explore our
   guide for top-notch React coming soon page templates for your project! " />
  

</div>

   </section>
  )
}
 
export default Projects;