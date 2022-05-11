import React from 'react'
import './about.css'
import AboutElement from "./AboutElement"
import aboutData from './about-data'

const About = () => {

  const aboutElements = aboutData.map(about => {
    return (
      <AboutElement
          key={about.id}
          img={about.img}
          title={about.title}
          desc={about.desc}
        />
    )
  })
  return (
    <section id="about">
      <h5>Dowiedz się więcej</h5>
      <h2>O nas</h2>
      <div className="about--container">
        {aboutElements}
      </div>
    </section>
  )
}

export default About