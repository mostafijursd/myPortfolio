
import React from 'react';


import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Features from './components/skills/Features';

function App() {
  

  return (
    <div className=' w-full h-auto bg-bodyColor text-lightText px-4'>
       <Navbar />
      <div className=' max-w-screen-xl mx-auto'>
     
      <Banner />
   <Features />
   <Projects/>
      </div>
    
    </div>
  )
}

export default App
