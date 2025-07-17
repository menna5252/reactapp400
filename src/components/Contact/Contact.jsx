import React, { useState,useEffect } from 'react'
import './Contact.module.css'
import SharedStructure from '../SharedStructure/SharedStructure'
import { Helmet } from 'react-helmet'
export default function Contact() {
 
      document.body.style.backgroundColor="#fff"
    
  const [formData,setFormData] = useState({
    name:'',
    email:'',
    age:'',
    message:''
  })
  const handleInputChange =(e)=>{
  const {name,value}=e.target;
  setFormData({
    ...formData,     //name='',email='',age='',name='mmm
    [name]:value
  })
  }
  return (
  <section className='py-5'>
       <Helmet>
           
           <title>Contact</title>
          
       </Helmet>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-0">Contact Us</h2>
          <SharedStructure customColor={'dark-line'} starColor={'dark-star'}/>
          <form>
            <div className="position-relative mb-5">
              <input
                type="text"
                id="name"
                name='name'
                onChange={handleInputChange}
                value={formData.name}
                className="w-100 custom-input"
                placeholder="Full Name"
              />
              {formData.name.length>0 ?<label htmlFor="name" className='cutom-label opacity-1'>Full Name</label>:<label htmlFor="name" className='cutom-label opacity-0 position-top'>Full Name</label>}
            </div>
            <div className="position-relative mb-5">
              <input
                type="text"
                id="email"
                name='email'
                onChange={handleInputChange}
                value={formData.email}
                className="w-100 custom-input"
                placeholder="email"
              />
              {formData.email.length>0 ?<label htmlFor="email" className='cutom-label opacity-1'>Email:</label>:<label htmlFor="name" className='cutom-label opacity-0 position-top'>Email</label>}
            </div>
            <div className="position-relative mb-5">
              <input
                type="text"
                id="age"
                name='age'
                onChange={handleInputChange}
                value={formData.age}
                className="w-100 custom-input"
                placeholder="Age"
              />
              {formData.age.length>0 ?<label htmlFor="email" className='cutom-label opacity-1'>Age:</label>:<label htmlFor="age" className='cutom-label opacity-0 position-top'>Age</label>}
            </div>
            <div className="position-relative mb-5">
              <input
                type="text"
                id="message"
                name='message'
                onChange={handleInputChange}
                value={formData.message}
                className="w-100 custom-input"
                placeholder="message"
              />
              {formData.message.length>0 ?<label htmlFor="message" className='cutom-label opacity-1'>message</label>:<label htmlFor="message" className='cutom-label opacity-0 position-top'>message</label>}
            </div>
            <button type="submit" className="btn-custom">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );



   </section>
  )
}
