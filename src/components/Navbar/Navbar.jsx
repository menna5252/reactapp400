import React, { useEffect, useState } from 'react'

import styles from './Navbar.module.css'
import { NavLink,Link } from 'react-router-dom';


export default function Navbar() {
  const[isScrolled,setIsScrolled] = useState(false)
  useEffect(()=>{
    const handleScroll =()=>{
      if(window.scrollY > 0){
        setIsScrolled(true)
      }
      else{
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  })
  return (
  <>
<nav style={{padding:isScrolled?'40px':'30px', transition:'padding 0.3s ease'}} className={`navbar navbar-expand-lg fixed-top navbar-dark  ${styles.bgnavbar}`}>
  <div className="container">
    <Link className="navbar-brand fw-bold fs-3 text-uppercase" to="">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link fw-semibold fs-5" aria-current="page" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-semibold fs-5" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-semibold fs-5" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fw-semibold fs-5" to="/contact">Contact</NavLink>
        </li>
      </ul>
  
    </div>
  </div>
</nav>


  </>
  )
}
