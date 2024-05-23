import React from 'react'
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <div>
        {/* Header */}
        <header className="">
            {/* titulo and search */}
            <div className="flex flex-col md:flex-row md:justify-between  md:items-center gap-4 mb-6">
              <div>
              <h1 className="text-2xl text-gray-300">Food Delivery</h1>
              <p className="text-gray-500">21 de Mayo de 2024</p>
            </div>
            <form action="">
              <div className="w-full relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                <input placeholder="Search" type="text" className="bg-[#1F1D2B] rounded-lg outline-none text-gray-300 w-full py-2 pl-10 pr-4 "/>
              </div>
              
            </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between lg:justify-start md:gap-8 border-b mb-6">
              <a href="#" className="text-primary relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:left-0 before:bg-primary before:rounded-full before:-bottom-[2px]">Hot dishes</a>
              <a href="#" className=" py-2 pr-4  hover:text-primary ">Cold dishes</a>
              <a href="#" className=" py-2 pr-4 hover:text-primary">Soup</a>
              <a href="#" className=" py-2 pr-4 hover:text-primary">Grill</a>
            </nav>
            
          </header>
    </div>
  )
}

export default Header