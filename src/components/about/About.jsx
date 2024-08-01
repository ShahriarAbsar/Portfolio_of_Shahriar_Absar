import React from "react";
import "./About.css";
import ME from "../../assets/About_me.jpg";
import { MdCastForEducation } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { BiCodeBlock } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { BsFiletypeScss } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
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
              <h4>
                {" "}
                My name is Shahriar Absar, and I graduated from BRAC University
                with a degree in Computer Science & Engineering (CSE). I am
                currently employed at WARC Limited as a Software Engineer,
                specializing in front-end web development using the Angular
                framework. In addition to my expertise in Angular, I have
                proficiency in several other programming languages and
                technologies, including Java, JavaScript, HTML, SCSS, and
                ReactJS.
              </h4>{" "}
            </span>
          </p>

          <div className="about__cards">
            {/*Education*/}
            <article className="about__card">
              <MdCastForEducation className="about__icon" />
              <h5>Education</h5>
              <br />
              <h4>
                <span>BRAC University(2022):</span>
              </h4>
              <small> BACHELOR OF SCIENCE in CSE CGPA 3.07 (OUT OF 4.00)</small>
              <br />
              <h4>
                <span> Dhaka City College (HSC-2016) </span>
              </h4>
              <small> Science, GPA 4.75 (out of 5.00)</small> <br />
              <h4>
                <span>
                  Mohammadpur Preparatory <br /> School (SSC-2014){" "}
                </span>
              </h4>
              <small> Science, GPA 5.00 (out of 5.00)</small>
            </article>
            {/*Experience*/}

            <article className="about__card">
              <BiCodeBlock className="about__icon" />
              <h5>Programming Languages</h5>
    <br />
              <div className="lang">
                <div>
                  <FaJava className="exp__icon" />
                  <h6>JAVA</h6>
                </div>
                <div>
                  <SiPython className="exp__icon" />
                  <h6>Python</h6>
                </div>
                <div>
                  <FaHtml5 className="exp__icon" />
                  <h6>HTML</h6>
                </div>
                <div>
                  <SiCss3 className="exp__icon" />
                  <h6>CSS</h6>
                </div>
                <div>
                  <TbBrandJavascript className="exp__icon" />
                  <h6>JavaScript</h6>
                </div>

                <div>
                  <FaAngular className="exp__icon" />
                  <h6>Angular</h6>
                </div>

                <div>
                  <GrReactjs className="exp__icon" />
                  <h6>React</h6>
                </div>
                <div>
                  <BsFiletypeScss className="exp__icon" />
                  <h6>Scss</h6>
                </div>
              </div>
            </article>
          </div>

          <a href="#contacts" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
