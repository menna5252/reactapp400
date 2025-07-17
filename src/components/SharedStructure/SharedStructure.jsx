import React from 'react'
import { FaStar } from "react-icons/fa6";
export default function SharedStructure({customColor,starColor}) {
  return (
    <div className="d-flex justify-content-center align-items-center">
        <div className={`line ${customColor}`}></div>
        <FaStar className={`fs-3 m-3 ${starColor}`}/>
        <div className={`line ${customColor}`}></div>
       </div>
  )
}
