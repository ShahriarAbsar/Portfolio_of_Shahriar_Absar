import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'
import {MdOutlineAlternateEmail} from 'react-icons/md'

const footer = () => {
  return (
    <footer>
      <a href='#' className='Footer__name'><span>SHAHRIAR ABSAR</span> </a>

      <div className="footer__socials">
        <a href="mailto: shahriarabsar786@gmail.com"><MdOutlineAlternateEmail/></a>
        <a href="https://www.linkedin.com/in/shahriarabsar/"><FaLinkedinIn/></a>
        <a href="https://github.com/ShahriarAbsar"><FiGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023 Shahriar Absar. All rights reserved</small>
      </div>
      
    </footer>
  )
}

export default footer
