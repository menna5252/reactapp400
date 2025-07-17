import React, { useState } from 'react'
import './Portfolio.module.css'
import SharedStructure from '../SharedStructure/SharedStructure'
import port1 from '../../assets/port1.png'
import port2 from '../../assets/port2.png'
import port3 from '../../assets/port3.png'
import ImageCard from '../ImageCard/ImageCard'
import { Helmet } from 'react-helmet'
import Modal from '../Modal/Modal'
export default function Portfolio() {
 
      document.body.style.backgroundColor="#fff"

const images =[
  {id:1,src:port1,alt:'port1'},
  {id:2,src:port2,alt:'port2'},
  {id:3,src:port3,alt:'port3'},
  {id:4,src:port1,alt:'port1'},
  {id:5,src:port2,alt:'port2'},
  {id:6,src:port3,alt:'port3'}
]
const [currentImage,setCutrrentImage] =useState(null)
const openModal = (image)=>{
  setCutrrentImage(image)
}
const closeModal =()=>{
  setCutrrentImage(null)
}
  return (
  <section className='py-5'>
       <Helmet>
           
           <title>Portfolio</title>
          
       </Helmet>
  <h2 className='text-center mb-0 text-dark'>Portfolio component</h2>
  <SharedStructure customColor={'dark-line'} starColor={'dark-star'}/>
  <div className="container">
    <div className="row gy-3">
        {images.map((image,index)=>
        <ImageCard key={image.id} image={image} openModal={openModal}/>
        )}
      </div>
  </div>
  {currentImage&&<Modal image={currentImage} onClose={closeModal}/>}
  </section>
  )
}
