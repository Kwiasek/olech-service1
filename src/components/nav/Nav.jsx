import React, { useState } from 'react'
import './nav.css'
import {ImHome3} from 'react-icons/im'
import {AiFillInfoCircle} from 'react-icons/ai'
import {MdHomeRepairService} from 'react-icons/md'
import {AiFillCar} from 'react-icons/ai'
import {FiMapPin} from 'react-icons/fi'
import {HiMail} from 'react-icons/hi'


const Nav = () => {
  const [active, setActive] = useState('#home')
  return (
    <nav>
      <ul className="nav--list">
        <li><a 
        href="#home"
        className={active === '#home' ? 'active' : ''}
        onClick={() => setActive('#home')}
        ><ImHome3/></a></li>
        <li><a 
        href="#about"
        className={active === '#about' ? 'active' : ''}
        onClick={() => setActive('#about')}
        ><AiFillInfoCircle /></a></li>
        <li><a 
        href="#service"
        className={active === '#service' ? 'active' : ''}
        onClick={() => setActive('#service')}
        ><MdHomeRepairService /></a></li>
        <li><a 
        href="#vehicle"
        className={active === '#vehicle' ? 'active' : ''}
        onClick={() => setActive('#vehicle')}
        ><AiFillCar /></a></li>
        <li><a 
        href="#map"
        className={active === '#map' ? 'active nav--map' : 'nav--map'}
        onClick={() => setActive('#map')}
        ><FiMapPin /></a></li>
        <li><a 
        href="#contact"
        className={active === '#contact' ? 'active' : ''}
        onClick={() => setActive('#contact')}
        ><HiMail /></a></li>
      </ul>
    </nav>
  )
}

export default Nav