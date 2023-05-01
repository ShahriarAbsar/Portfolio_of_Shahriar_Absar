import React from 'react'
import './About.css'
import ME from '../../assets/About_me.jpg'
import{MdCastForEducation} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import{FaHtml5} from 'react-icons/fa'
import{SiCss3} from 'react-icons/si'
import{FaJava} from 'react-icons/fa'
import{TbBrandJavascript} from 'react-icons/tb'
import{SiPython} from 'react-icons/si'
import{GrReactjs} from 'react-icons/gr'
import{BiCodeBlock} from 'react-icons/bi'
import {FaBootstrap} from 'react-icons/fa'

const About = () => {
  return (
    
  <section id='about'>
    
        <h5>Get to Know</h5>
        <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
        {/**/}

        <p> 
            <span>
           <h4> I am a fresh graduate and I look forward to start my career with dedication and sincerity towards 
          my objective.I am looking for a challenging role in a reputable organization to utilize my
          knowledge and skills for the growth of the organization as well as to enhance
          my knowledge about new and emerging trends in the IT sector.Desirous of an IT Service Management
          role in a challenging workplace that welcomes innovative ideas and offers growth opportunities and
          positive environment for accomplishing projects. Hold BSc in Computer Science and Engineering from
          BRAC University.
          </h4> </span>
           </p>

            <div className="about__cards" >

               {/*Education*/}
               <article className="about__card">
                    <MdCastForEducation className='about__icon'/>
                      <h5>Education</h5>
                      <br />
                      <h4><span>BRAC University(2022):</span></h4> 
                      <small> BACHELOR OF SCIENCE in CSE
                        CGPA 3.07 (OUT OF 4.00)</small>
                      <br />
                      <h4><span> Dhaka City College (HSC-2016) </span></h4> 
                      <small> Science, GPA 4.75 (out of 5.00)</small> <br />
                      <h4><span>Mohammadpur Preparatory <br /> School (SSC-2014) </span></h4> 
                      <small> Science, GPA 5.00 (out of 5.00)</small>
                      
            </article>
                                            {/*Experience*/}          

                <article className='about__card'>
                  <BiCodeBlock className='about__icon'/>
                  <h5>Programming Languages</h5>
                  
                  <h6>JAVA</h6>
                  <FaJava className='exp__icon'/><small> Intermideate</small>
                  <h6>Python</h6>
                  <SiPython className='exp__icon'/><small> Intermideate</small>
                  <h6>HTML</h6>
                  <FaHtml5 className='exp__icon'/><small> Intermideate</small>
                  <h6>CSS</h6>
                  <SiCss3 className='exp__icon'/><small> Intermideate</small>
                  <h6>JavaScript</h6>
                  <TbBrandJavascript className='exp__icon'/><small> Intermideate</small>
                  <h6>BOOTSTRAP</h6>
                  <FaBootstrap className='exp__icon'/><small> Intermideate</small>
                  <h6>React</h6>
                  <GrReactjs className='exp__icon'/><small> Intermideate</small> 
                  </article>
                  
                                      {/*Projects*/}
                                      {/*
            <article className='about__card'>
              <BiCodeBlock className='about__icon'/>
                <h5>Projects</h5>
                <small>
                
                <a href="" >1. Personal Portfolio Using React</a><br />
                <a href="https://shahriarabsar.github.io/Weather-App/" target="_blank" > 2.Weather-app</a><br />
                <a href="https://shahriarabsar.github.io/Food_html-css/project01.html" target="_blank">3. Online Food Menu using HTML & CSS (Chick-N-kO)</a><br />
                <a href="https://shahriarabsar.github.io/Football-Html-CSS/project02.html"target="_blank" >4. Responsive Website using HTML & CSS (Football)</a><br />
                <a href="https://shahriarabsar.github.io/CBR-Bootstrap/project03.html" target="_blank">5. E-Commerce Site using HTML CSS Bootstrap (Honda)</a><br />
                <a href="https://shahriarabsar.github.io/JAVASCRIPT-CLOCK/" target="_blank">6. Basic clock using HTML, CSS & JavaScript</a><br />
                
                </small>

            </article>
          */}
          </div>

          
          

          <a href="#contact" className='btn btn-primary'>Contact Me</a>

        </div>
                                                  

      </div>


      
      
     </section>
  
  )
}

export default About
