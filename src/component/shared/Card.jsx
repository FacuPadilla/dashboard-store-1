import React from 'react'

const Card = (props) => {

    const {img, title, price, qty} = props;
  return (
    <div className="text-gray-300 bg-[#1F1D2B] p-8 rounded-xl flex flex-col gap-2 items-center text-center">
    <img src={img} className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full" />
    <p className="text-xl">{title}</p>
    <span className="text-gray-400">${price}</span>
    <p className="text-gray-600">{qty} Available</p>
  </div>
  )
}

export default Card

 