import React from 'react';

import CardOne from './CardOne';
import CardTwo from './CardTwo';
import Title from '../layout/Title';
function Features() {
  return (
    <section id='skills' className=' w-full py-20 border-b-[1px]
    border-b-black '>
<div className="flex justify-center items-center text-center">
        <Title title="Skills"  />
      </div>


<div className='  flex justify-between flex-col lgl:flex-row gap-6 xl:gap-20' >
  
 <CardOne title="Frontend" />
 <CardTwo title="Bcakend" />


</div>
   </section>
  )
}

export default Features;