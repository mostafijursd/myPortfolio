import React from 'react';
import {Link} from 'react-scroll'
import {Mostafijur } from '../../assets/index';
import { navLinksdata} from'../../constants';

function Navbar() {
  return (
    <div className=' w-full h-20 mx-auto flex justify-between sticky top-0 z-50 
    items-center font-titleFont border-b-[1px] border-b-orange-200'>
     
     <div >
        <img src={Mostafijur}  className=' w-16 h-16 rounded-full'  />

     </div>
     <div>
        <ul className='flex items-center  gap-10'>
        {
             navLinksdata.map(({_id, title, link})=>(
                <li key={_id} className=' text-base font-normal text-gray-400 
                tracking-wide cursor-pointer
                 hover:text-designColor duration-300'> 
                 <Link
                 activeClass="active"
                 to={link}
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
                 
                 >{title}</Link></li>
            ))
        } 
        </ul>
     </div>
    </div>
  )
}

export default Navbar