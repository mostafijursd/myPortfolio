import React from 'react'
import Title from './Title'
import Card from './Card'
import Card2 from './Card2'
function Features() {
  return (
    <section id='skills' className=' w-full h-[800px] py-20 flex  flex-col  border-b-[1px]
    border-b-black '>
<div className="flex justify-center items-center text-center">
        <Title title="Skills"  />
      </div>


<div className='  flex justify-between gap-10' >
  
 <Card title="Frontend" />
 <Card2 title="Bcakend" />


</div>
   </section>
  )
}

export default Features