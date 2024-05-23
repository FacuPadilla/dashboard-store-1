import React from 'react'
import { IoMdMenu, IoMdAddCircle, IoMdCloseCircle  } from "react-icons/io";
import { RiPieChart2Fill } from "react-icons/ri";
import { RiAccountCircleFill ,RiMenu3Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export const CarT = (props) => {

    const {showOrder, setShowOrder} = props;
  return (
    <div className={`  lg:col-span-2  fixed lg:right-0 lg:w-96  top-0 w-full h-full bg-[#1F1D2B] transition-all z-50 
        ${showOrder ? 'right-0' : '-right-full'}`}>
          {/* Orders */}
          <div className="relative pt-16 lg:pt-8 text-gray-300 p-8 h-full  ">
              <IoMdCloseCircle onClick={()=>setShowOrder(false)} className="lg:hidden absolute left-4 top-4 p-3 box-content text-xl text-gray-300 bg-[#262837] rounded-full "/>
              <h1 className="text-2xl my-4">Order #258</h1>
              {/* Pilss */}
              <div className="flex text-center gap-4 flex-wrap mb-8">
                <button className="bg-primary text-white py-2 px-4 rounded-xl ">
                  Dine in
                </button>
                <button className=" text-primary py-2 px-4 rounded-xl border border-gray-500 hover:bg-primary hover:text-white transition-all">
                  To go
                </button>
                <button className="text-primary py-2 px-4 rounded-xl border border-gray-500 hover:bg-primary hover:text-white transition-all">
                  Delivery
                </button>
              </div>
              {/* Cart */}
              <div>
                  <div className="grid grid-cols-6 mb-4 p-4">
                    <h5 className="col-span-4">Item</h5>
                    <h5 className="">Qty</h5>
                    <h5 className="">price</h5>
                  </div>
             {/* Productsssss */}
              {/* Product */}
              <div className=" h-[400px] md:h-[700px] lg:h-[350px] overflow-scroll"> 
                 <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/* Description product */}
                  <div className="flex col-span-4 items-center gap-3">
                    <img src="empa.png" alt="" className="w-10 h-10 object-cover"/>
                    <div>
                      <h5 className="text-sm ">Empanada</h5>
                      <p className="text-xs text-gray-500">$800</p>
                    </div>

                    
                  </div>
                  {/* Quantity */}
                  <div className="">
                    <span>
                      2
                    </span>
                  </div>
                  {/* price */}
                  <div>
                    <span>$1600</span>
                  </div>
                
                </div>
                {/* note */}
                <div className="grid grid-cols-6 items-center  gap-4">
                  <form className="col-span-5 ">
                    <input type="text" placeholder="Leave a review" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" />
                  </form>
                  <div className="col-span-1 ">
                    <button className="border border-white p-2 rounded-lg hover:scale-105 hover:border-red-500 group">
                      <FaTrashAlt className="text-white group-hover:text-red-500"/>
                    </button>
                  </div>

                </div>
                
              </div>
              {/* Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/* Description product */}
                  <div className="flex col-span-4 items-center gap-3">
                    <img src="pizza.png" alt="" className="w-10 h-10 object-cover"/>
                    <div>
                      <h5 className="text-sm ">Pizza</h5>
                      <p className="text-xs text-gray-500">$3500</p>
                    </div>

                    
                  </div>
                  {/* Quantity */}
                  <div className="">
                    <span>
                      1
                    </span>
                  </div>
                  {/* price */}
                  <div>
                    <span>$3500</span>
                  </div>
                
                </div>
                {/* note */}
                <div className="grid grid-cols-6 items-center gap-4 ">
                  <form className="col-span-5">
                    <input type="text" placeholder="Leave a review" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" />
                  </form>
                  <div className="col-span-1 ">
                    <button className="border border-white p-2 rounded-lg hover:scale-105 hover:border-red-500 group">
                      <FaTrashAlt className="text-white group-hover:text-red-500"/>
                    </button>
                  </div>

                </div>
                
              </div>
              {/* Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-4">
                  {/* Description product */}
                  <div className="flex col-span-4 items-center gap-3">
                    <img src="milanesa.png" alt="" className="w-10 h-10 object-cover"/>
                    <div>
                      <h5 className="text-sm ">Suprema de p..</h5>
                      <p className="text-xs text-gray-500">$3700</p>
                    </div>

                    
                  </div>
                  {/* Quantity */}
                  <div className="">
                    <span>
                      1
                    </span>
                  </div>
                  {/* price */}
                  <div>
                    <span>$3700</span>
                  </div>
                
                </div>
                {/* note */}
                <div className="grid grid-cols-6 items-center gap-4">
                  <form className="col-span-5">
                    <input type="text" placeholder="Leave a review" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" />
                  </form>
                  <div className="col-span-1 ">
                    <button className="border border-white p-2 rounded-lg hover:scale-105 hover:border-red-500 group">
                      <FaTrashAlt className="text-white group-hover:text-red-500"/>
                    </button>
                  </div>

                </div>
                
              </div>
              {/* Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4 ">
                <div className="grid grid-cols-6 mb-4">
                  {/* Description product */}
                  <div className="flex col-span-4 items-center gap-3">
                    <img src="sopa.png" alt="" className="w-10 h-10 object-cover"/>
                    <div>
                      <h5 className="text-sm ">sopa</h5>
                      <p className="text-xs text-gray-500">$2200</p>
                    </div>

                    
                  </div>
                  {/* Quantity */}
                  <div className="">
                    <span>
                      1
                    </span>
                  </div>
                  {/* price */}
                  <div>
                    <span>$2200</span>
                  </div>
                
                </div>
                {/* note */}
                <div className="grid grid-cols-6 items-center gap-4">
                  <form className="col-span-5">
                    <input type="text" placeholder="Leave a review" className="bg-[#1F1D2B] py-2 px-4 rounded-lg outline-none" />
                  </form>
                  <div className="col-span-1 ">
                    <button className="border border-white p-2 rounded-lg hover:scale-105 hover:border-red-500 group">
                      <FaTrashAlt className="text-white group-hover:text-red-500"/>
                    </button>
                  </div>

                </div>
                
              </div>
              </div>
             
              
              </div>
             {/* Submit Payment */}
             <div className="bg-[#262837]  absolute w-full bottom-0 left-0 p-4" >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Discount</span>
                  <span>$1100</span>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-400">Subtotal</span>
                  <span>$9900</span>
                </div>
                <div>
                  <button className="bg-primary w-full py-2 px-4 rounded-lg">
                  Continue with payment
                  </button>
                </div>
              </div>
              
          </div>
          
        </div>
  )
} 
export default CarT
