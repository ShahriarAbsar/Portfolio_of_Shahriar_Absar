import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookAdd} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import{useState} from 'react'


const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>

      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
        <AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <BiUser/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <BiBookAdd/></a>
      {/*<a href='#Portfolio'><AiOutlineHome/></a>*/}
      <a href="#contacts" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}>
        <IoMdContact/></a>
        
    </nav>
  )
}

export default Nav
