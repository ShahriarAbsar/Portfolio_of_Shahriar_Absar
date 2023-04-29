import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {MdOutlineAlternateEmail} from 'react-icons/md'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
    
      <a href="https://www.linkedin.com/in/shahriarabsar/" target="blank"><FaLinkedinIn/></a>
      <a href="https://github.com/ShahriarAbsar" target="blank"><FiGithub/></a>
      <a href="mailto: shahriarabsar786@gmail.com" target="blank"><MdOutlineAlternateEmail/></a>
    
    </div>
  )
}

export default HeaderSocials
