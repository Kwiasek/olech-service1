import React from 'react'
import './header.css'
import BGIMG from '../../assets/header.svg'
import {BsFacebook} from 'react-icons/bs'
import {IoMdMail} from 'react-icons/io'


const Header = () => {
  return (
    <header id='home'>
      <div className="zegar"></div>
      <h5>Witaj na stronie</h5>
      <h1 className='logo'>Olech-Service</h1>
      <img src={BGIMG} alt="Header background" className='header--bg'/>
      <span className="socials">
        <a href="https://www.facebook.com/Olech-Service-106603740985482" target="_blank" rel='noreferrer'><BsFacebook className='socials-icon'/></a>
        <a href="mailto:biuro@olechservice.pl" ><IoMdMail className='socials-icon'/></a>
      </span>
      <a href="#about" className="scroll">Zjedź niżej</a>
    </header>
  )
}

export default Header