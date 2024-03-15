import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

function Banner() {
 
  return (
    <section id='home' className='w-full  py-20 pb-20  flex flex-col lgl:flex-row items-cente
     border-b-[1px] font-titleFont border-b-black gap-10 xl:gap-0'>
<LeftBanner/>

<RightBanner/>
    </section>
  )
}

export default Banner; 