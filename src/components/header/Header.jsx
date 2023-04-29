import React from 'react'
import './header.css'
import CVD from './CVD'
import ME from '../../assets/pic.png'
import HeaderSocials from './HeaderSocials'



const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I am</h3>
        <h1>Shahriar Absar</h1>
        <h4 className="text-light">Computer Science Engineer</h4>
        
        <CVD />

        <HeaderSocials/>

        <div className="me">

          <img src={ME} alt="me" />

        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default header
