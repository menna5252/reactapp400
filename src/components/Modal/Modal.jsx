import React from 'react'

export default function Modal({image,onClose}) {
 const handleClick=(e)=>{
e.target.id!=="modal-image"?onClose():''
  }
  return (
    <div className='modal' onClick={handleClick}>
    
        <img src ={image.src} alt={image.alt}  id='modal-image' className='w-500'/>
    
    
    </div>
  )
}
