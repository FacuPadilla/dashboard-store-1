import SideBar from "./component/shared/SideBar"
import { IoMdMenu, IoMdAddCircle, IoMdCloseCircle  } from "react-icons/io";
import { RiPieChart2Fill } from "react-icons/ri";
import { RiAccountCircleFill ,RiMenu3Fill } from "react-icons/ri";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { CarT } from "./component/shared/CarT";
import Card from "./component/shared/Card";
import Header from "./component/shared/Header"; 

function App() {

const [showMenu, setShowMenu] = useState(false);
const [showOrder, setShowOrder] = useState(false);

const toggleMenu = ()=>{
  setShowMenu(!showMenu);
  setShowOrder(false)
}

const toggleOrder = ()=>{
  setShowOrder(!showOrder)
  setShowMenu(false)
}


  return (
    <div className="relative bg-[#262837] w-full min-h-screen">
      <SideBar showMenu={showMenu}></SideBar>
      <CarT showOrder={showOrder} setShowOrder={setShowOrder}/>
      {/* Menu Movil */}
      <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center 
      justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiAccountCircleFill />
        </button>
        
        <button className="p-2">
          <IoMdAddCircle  />
        </button>
        <button onClick={toggleOrder} className="p-2">
          <RiPieChart2Fill />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <IoMdCloseCircle className="text-primary"/> : <RiMenu3Fill/>}
        </button>
      </nav>
      <main className="lg:pl-32 lg:pr-96  pb-20">
        <div className=" md:p-8 p-4">
          {/* Header */}
            <Header/>
          {/* Title Content */}
            <div className="flex items-center justify-between mb-20">
              <h2 className="text-xl text-gray-300">
                Choose Dishes
              </h2>
              <button className="bg-[#1F1D2B] py-2 px-4 rounded-lg flex items-center gap-4 text-gray-300">
                <FaChevronDown/> Dine in
              </button>

            </div>
            {/* Content */}
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-16 lg:grid-cols-3">
              {/* Cards */}
              <Card
               img="empa.png"
               title="Empanada de carne suave"
               price="800"
               qty="20"/>
               <Card
               img="pizza.png"
               title="Pizza especial"
               price="3500"
               qty="5"/>
               <Card
               img="ensalada.png"
               title="Ensaladas varias"
               price="3000"
               qty="9"/>
               <Card
               img="milanesa.png"
               title="Suprema de pollo"
               price="3700"
               qty="15"/>
               <Card
               img="sopa.png"
               title="Sopa"
               price="2200"
               qty="2"/>
               <Card
               img="fideos.png"
               title="Fideos con salsa"
               price="2999"
               qty="0"/>
               
            </div>
            
        </div>
        <div className="text-center w-full text-gray-300 flex justify-center ">
              <p className="absolute bottom-20">Created & Developed by Facundo Jose Padilla</p>
            </div>
        
      </main>
      
      
    </div>
  )
    
}

export default App
