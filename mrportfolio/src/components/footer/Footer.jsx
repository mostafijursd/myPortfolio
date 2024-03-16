import { logo } from "../../assets/index";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div className='w-full py-20 h-auto border-b-[1px]
     border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8'>
<div className=' w-full h-full flex flex-col gap-8 '>

    <img src={logo} alt="logo"  className=" w-32 rounded-full shadow-shadowOne"/>
    <div  className=" flex gap-4">
    <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300">
             <a href="https://twitter.com/MostafijurSd" target='_blank'><FaSquareXTwitter /></a> 
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300"  >
             <a href="https://www.linkedin.com/in/mostafijur-rahaman-b5750927a/" target='_blank'>  <FaLinkedin  /></a>
              
                
            
            </span>
            <span className="w-10 h-10 bg-blue-800 bg-opacity-25
             text-gray-200 text-xl inline-flex items-center 
             justify-center rounded-md shadow-shadowOne hover:bg-opacity-40 
             hover:-translate-y-1 transition-all hover:text-designColor
              cursor-pointer duration-300"  >
              <a href="https://github.com/mostafijursd" target='_blank'> <FaGithub/></a>
            </span>
    </div>
</div>
<div className=' w-full h-full '>
<h3  className=" text-xl uppercase text-designColor tracking-wider">Quick Link </h3>
<ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
  <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              About
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
   </li>
   <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
   Portfolio
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
   </li>
   <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
   Services
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
   </li>
   <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
   Blog
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
   </li>
 
   <li> <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
   Contact
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
   </li>
</ul>
</div>
<div className=' w-full h-full '>
<h3 className="text-xl uppercase text-designColor tracking-wider">
          RESOURCES
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              System Status
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Terms of Service
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Pricing
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Over Right
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>

</div>
<div className=' w-full h-full'>


<h3 className="text-xl uppercase text-designColor tracking-wider">
          DEVELOPERS
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Documentation
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Authentication
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              API Reference
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Support
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              Open Source
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
</div>

    </div>
  )
}

export default Footer;