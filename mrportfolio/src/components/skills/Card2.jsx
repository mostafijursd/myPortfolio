import React from 'react'

function Card({title}) {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
<div className=' flex flex-col gap-4'>
    <div>
    <h2 className=' text-2xl 
    font-titleFont font-bold text-gray-300'>{title}</h2>
</div>
<div>
   <div>
<p></p>

   </div>
</div>

</div>


    </div>
    
  )
}

export default Card