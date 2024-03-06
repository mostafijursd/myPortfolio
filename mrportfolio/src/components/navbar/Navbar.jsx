import React from 'react';
import {Link} from 'react-scroll'
import {Mostafijur ,logo,logoOne } from '../../assets/index';
import { navLinksdata} from'../../constants';

function Navbar() {
  return (
    <div className=' w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between
     items-center font-titleFont border-b-[1px] border-b-gray-600'>
     
     <div >
        <img src={logo}  className=' w-16 h-16 rounded-full'  />

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