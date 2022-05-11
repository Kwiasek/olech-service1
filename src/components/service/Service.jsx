import React from 'react'
import './service.css'
import {FaWrench} from 'react-icons/fa'
import serwis from '../../assets/serwis.webp'

const Service = () => {
  return (
    <section id='service'>
      <h5>To czego każdy samochód potrzebuje, czyli</h5>
      <h2>Serwis</h2>
      <div className="service--content-container">
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Piaskowanie elementów w tym zacisków hamulcowych, felg itp.</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Remonty główne silników, głowic</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Wymiana oleju</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Przeglądy przed zakupem</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Pełną diagnostykę geometrii podwozia</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Naprawy elektryczne i elektroniczne</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Serwis klimatyzacji</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Naprawy blacharsko lakiernicze</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Przeglądy okresowe</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Komputerowy test elektroniki pojazdu</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Remonty układów zawieszeń, układów hamulcowych</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Naprawa zawieszenia</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Pełen zakres części i akcesoriów</p>
        </div>
        <div className="service--item">
          <FaWrench className='service-icon' />
          <p>Usługi Stacji Kontroli Pojazdów</p>
        </div>
      </div>
    </section>
  )
}

export default Service