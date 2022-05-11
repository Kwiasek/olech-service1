import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Olech-Service</a>

      <ul className="permalinks">
        <li><a href="#home">Początek</a></li>
        <li><a href="#about">O firmie</a></li>
        <li><a href="#service">Serwis</a></li>
        <li><a href="#vehicle">Stacja kontroli pojazdów</a></li>
        <li><a href="#map">Mapa</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebok.com"><FaFacebookF className='footer__socials-icon'/></a>
        <a href="https://instagram.com"><FiInstagram className='footer__socials-icon'/></a>
        <a href="https://twitter.com"><IoLogoTwitter className='footer__socials-icon'/></a>
      </div>

      <div className="footer__copyright">
        <small>Made by &copy; Adam Kwiasowski. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer