import React from 'react'
import cv from '../../assets/Shahriar-Absar-CV.pdf'

const CVD = () => {
  return (
    <div className='cvd'>
         <a href={cv}download className='btn'>Download CV</a>
         <a href="#contact" className='btn btn-primary'>Contacts</a>
  </div>
  )
}

export default CVD
