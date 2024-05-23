import React from 'react'
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { RiPieChart2Fill } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";
import { IoIosMail, IoIosNotifications, IoMdSettings, IoMdCloseCircle } from "react-icons/io";


const SideBar = (props) => {

    const {showMenu} = props;

  return (
    <div className={` bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-4 rounded-tr-xl rounded-br-xl
    z-50 transition-all ${showMenu ? `left-0` : `-left-full`} `}>
        <div>
          <ul className=' pl-4'>
            <li>
                <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>
                 Logo
                </h1>
            </li>
            <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
                <a href="" className='text-white bg-primary p-4 flex justify-center rounded-xl '>
                    <FaHome className='text-2xl '></FaHome>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="" className='transition-colors group-hover:bg-primary group-hover:text-white text-primary p-4 flex justify-center rounded-xl '>
                    <BiSolidOffer className='text-2xl '></BiSolidOffer>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="" className='transition-colors group-hover:bg-primary group-hover:text-white text-primary p-4 flex justify-center rounded-xl '>
                    <RiPieChart2Fill className='text-2xl '></RiPieChart2Fill>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="" className='transition-colors group-hover:bg-primary group-hover:text-white text-primary p-4 flex justify-center rounded-xl '>
                    <IoIosMail className='text-2xl '></IoIosMail>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="" className='transition-colors group-hover:bg-primary group-hover:text-white text-primary p-4 flex justify-center rounded-xl '>
                    <IoIosNotifications className='text-2xl '></IoIosNotifications>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="" className='transition-colors group-hover:bg-primary group-hover:text-white text-primary p-4 flex justify-center rounded-xl '>
                    <IoMdSettings  className='text-2xl '></IoMdSettings>
                </a>
            </li>
            
        </ul>  
        </div>
        <div>
            <ul className=' pl-4'>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href="" className='transition-colors group-hover:bg-primary group-hover:text-white text-primary  p-4 flex justify-center rounded-xl '>
                    <CiLogin  className='text-2xl '></CiLogin>
                </a>
            </li>
            </ul>
        </div>
        
        
    </div>
  )
}

export default SideBar