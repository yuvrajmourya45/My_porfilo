import React from 'react'

export default function About() {
  return (
    <section id='about' className="about">
      <div className="container about-container">
      <h2 className='heading'>About <span>Me</span></h2>

        <div className="about-img">
          <img src="Home_hero.png" alt="Mahek" />
          <span className="circle-spin img-fluid"></span>
        </div>

        <div className="about-content">
          <h3>MERN Stack Developer</h3>
          <p>
            I'm a passionate <span>MERN Stack Developer</span> with hands-on experience building
            full-stack web applications. I love turning ideas into real, responsive, and
            user-friendly products using modern technologies like React, Node.js, Express, and MongoDB.
          </p>
          <p>
            I focus on writing clean, maintainable code and delivering smooth user experiences.
            Whether it's a dynamic frontend or a robust backend API, I enjoy every part of the
            development process.
          </p>

          <div className="about-stats">
            <div className="stat-box">
              <h4>2+</h4>
              <p>Full Stack Projects</p>
            </div>
            <div className="stat-box">
              <h4>5+</h4>
              <p>Total Projects</p>
            </div>
            <div className="stat-box">
              <h4>10+</h4>
              <p>Technologies</p>
            </div>
          </div>

          <div className="btn-box btns">
            <a href="#contact" className="btn">Hire Me</a>
            <a href="#project" className="btn">My Work</a>
          </div>
        </div>

      </div>
    </section>
  )
}
