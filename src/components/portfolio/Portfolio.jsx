import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/chick.jpg'
import IMG2 from '../../assets/Honda.jpg'
import IMG3 from '../../assets/football.jpg'
import IMG4 from '../../assets/clock.jpg'
import IMG5 from '../../assets/weather.jpg'



const portfolio = () => {
  return (
    <section id='portfolio' >

    <h5>My Recent Work</h5>  
    <h2><span>Portfolio</span> </h2>

    <div className="container portfolio__container">
      

             {/*1*/}   <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG1} alt="" />
                </div>
                <h3>Online Food Menu using HTML & CSS (Chick-N-kO)</h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/ShahriarAbsar/Food_html-css" className='btn' target='blank'>Github</a>
                  <a href="https://shahriarabsar.github.io/Food_html-css/project01.html" className='btn btn-primary'target='blank'>Live Demo</a>
                </div>


                </article>

              {/*2*/}  <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG2} alt="" />
                </div>
                <h3>E-Commerce Site using HTML CSS Bootstrap (Honda)</h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/ShahriarAbsar/CBR-Bootstrap" className='btn' target='blank'>Github</a>
                  <a href="https://shahriarabsar.github.io/CBR-Bootstrap/project03.html" className='btn btn-primary'target='blank'>Live Demo</a>
                </div>


                </article>
                
               {/*3*/}  <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG3} alt="" />
                </div>
                <h3>Responsive Website using HTML & CSS (Football)</h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/ShahriarAbsar/Football-Html-CSS" className='btn' target='blank'>Github</a>
                  <a href="https://shahriarabsar.github.io/Football-Html-CSS/project02.html" className='btn btn-primary'target='blank'>Live Demo</a>
                </div>


                </article>
                
              {/*4*/}   <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG4} alt="" />
                </div>
                <h3>Basic clock using HTML, CSS & JavaScript</h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/ShahriarAbsar/JAVASCRIPT-CLOCK" className='btn' target='blank'>Github</a>
                  <a href="https://shahriarabsar.github.io/JAVASCRIPT-CLOCK/" className='btn btn-primary'target='blank'>Live Demo</a>
                </div>


                </article>
                
              {/*5*/}  <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={IMG5} alt="" />
                </div>
                <h3>Weather-app</h3><br />
                <div className="portfolio__item-cta">
                  <a href="https://github.com/ShahriarAbsar/Weather-App" className='btn' target='blank'>Github</a>
                  <a href="https://shahriarabsar.github.io/Weather-App/" className='btn btn-primary'target='blank'>Live Demo</a>
                </div>


                </article>

    </div>
      
    </section>
  )
}

export default portfolio
