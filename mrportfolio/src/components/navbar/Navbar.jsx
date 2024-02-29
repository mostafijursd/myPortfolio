import React from 'react';
import {Mostafijur } from '../../assets/index';
import { navLinksdata} from'../../constants';
function Navbar() {
  return (
    <div className=' w-full h-20 mx-auto flex justify-between items-center'>
     
     <div>
        <img src={Mostafijur}  className=' w-16 h-16 rounded-full'  />

     </div>
     <div>
        <ul className=' flex items-center gap-10'>
        {
             navLinksdata.map((item)=>(
                <li key={item._id} className=' text-base font-normal text-gray-400 
                tracking-wide cursor-pointer hover:text-designColor duration-300'>{item.title}</li>
            ))
        } 
        </ul>
     </div>
    </div>
  )
}

export default Navbar