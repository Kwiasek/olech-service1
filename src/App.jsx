import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Service from './components/service/Service'
import Vehicle from './components/vehicle/Vehicle'
import Map from './components/map/Map'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import sr from './ScrollReveal'

const App = () => {

  sr.reveal('.container', {opacity: 0, duration: 1500, easing: 'ease'})


  return (
    <div className='container'>
        <Header />
        <Nav />
        <About />
        <Service />
        <Vehicle />
        <Map />
        <Contact />
        <Footer />
    </div>
  )
}

export default App