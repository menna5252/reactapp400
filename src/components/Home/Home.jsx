import React, { useEffect } from 'react'
import avatar from '../../assets/avataaars.svg'
import styels from './Home.module.css'
import SharedStructure from '../SharedStructure/SharedStructure'
import { ReactTyped } from "react-typed";
import {Helmet} from "react-helmet";
export default function Home() {
  
    document.body.style.backgroundColor="#1ABC9C"

  return (
    <>
    <Helmet>
           
                <title>Home</title>
               
            </Helmet>
     <div className='text-center py-5'>
    <img src={avatar} className={styels.customWidth} alt="" />  
   <SharedStructure customColor={'light-line'} starColor={'light-start'}/>

    <ReactTyped className='text-white fs-3' strings={
      ["Graphic Artist",
        "Graphic Artist",
        "Illustrator"
      ]}
       typeSpeed={40} loop />
 

  </div>
    </>
 
  )
}

