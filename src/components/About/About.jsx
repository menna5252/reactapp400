import React from 'react'
import SharedStructure from '../SharedStructure/SharedStructure'
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet';
export default function About() {

      document.body.style.backgroundColor="#1ABC9C"
  
  return (

  <section className='py-5 my-5'>
     <Helmet>
           
           <title>About</title>
          
       </Helmet>
  <div className="heading text-center">
    <h2 className='mb-0 text-white'>About component</h2>
    <SharedStructure customColor={'light-line'} starColor={'light-start'}/>
  </div>
    <div className="container py-5 text-center text-white fs-3">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="about-item">
            <h2><CountUp start={0} end={200} duration={2.5}/></h2>
            <p>Team member</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="about-item">
          <h2><CountUp start={0} end={354} duration={2.5}/></h2>
            <p>Complete Projects</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="about-item">
          <h2><CountUp start={0} end={1200} duration={2.5}/></h2>
            <p>Lines Of Code</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="about-item">
            <h2><CountUp start={0} end={1800} duration={2.5}/></h2>
            <p>Files Downloaded</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
