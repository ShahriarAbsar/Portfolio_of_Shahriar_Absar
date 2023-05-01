import React from 'react'
import './contacts.css'
import {SiGmail} from 'react-icons/si'
import {ImLinkedin} from 'react-icons/im'


const contacts = () => {
  return (
    
    <section id='contacts' >
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <SiGmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>shahriarabsar786@gmail.com</h5>
          <a href="mailto:shahriarabsar786@gmail.com" target='blank'>Send a message</a>
        </article>
        <article className="contact__option">
          <ImLinkedin className='contact__option-icon' />
          <h4>LinkedIn</h4>
          <h5>Shahriar Absar</h5>
          <a href="https://www.linkedin.com/in/shahriarabsar/" target='blank'>Send a message</a>
        </article>
   </div>

      <form action="">
        <input type="text" name='name' placeholder='Enter Your Full Name' required/>
        <input type="email" name='email' placeholder='Enter Your Email' required/>
        <textarea name="message" rows="10" placeholder='YOUR MESSAGE' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>

      </div>  
      
    </section>
  )
}

export default contacts
