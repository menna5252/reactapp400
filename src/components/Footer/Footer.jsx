import React from 'react'
import styles from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
export default function Footer() {
  return (
<footer className='text-white'>
   <div className={`upper-footer text-center p-5 ${styles.bgUpperfooter}`}>
   <div className="container">
  <div className="row">
    <div className="col-lg-4 col-md-6">
    <div className="footer-item">
    <h3>LOCATION</h3>
    <p>2215 John Daniel Drive</p>
    <p>Clark, MO 65243e</p>
  </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="footer-item">
    <h3>AROUND THE WEB</h3>
    <ul className='list-unstyled d-flex justify-content-center'>
      <li><a className='text-white ms-3' href=""><FaFacebook  className={styles.roundCircle}/></a></li>
      <li><a className='text-white ms-3' href=""><FaTwitter  className={styles.roundCircle}/></a></li>
      <li><a className='text-white ms-3' href=""><FaLinkedinIn   className={styles.roundCircle}/></a></li>
      <li><a className='text-white ms-3' href=""><AiOutlineGlobal  className={styles.roundCircle}/></a></li>
    </ul>
  </div>
    </div>
    <div className="col-lg-4 col-md-6">
    <div className="footer-item">
    <h3>ABOUT FREELANCER</h3>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
  </div>
    </div>
   
  </div>
 </div>
   </div>
 <div className={`lower-footer text-center p-3 ${styles.bgLowerFooter}`}>
  <p>Copyright © Your Website 2025</p>
 </div>
  </footer>
  )
}
