import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nv08kjf', 'template_bs476xm', form.current, 'JeJzs7gctsMQe7n69')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Wyślij nam wiadomość!</h5>
      <h2>Kontakt</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>biuro@olechservice.pl</h5>
            <a href="mailto:kwiasekkwiasek@gmail.com">Wyślij wiadomość</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Olech-Service</h5>
            <a href="https://m.me/106603740985482" target="_blank" rel="noreferrer">Wyślij wiadomość</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Telefon</h4>
            <h5>42 649 22 94</h5>
            <a href="callto:42 649 22 94" target="_blank" rel="noreferrer">Zadzwoń</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Imię i Nazwisko' required/>
          <input type="email" name="email" placeholder='Twój Email' required />
          <input type="text" name='topic' placeholder='Temat' required/>
          <textarea name="message" id="" rows="7" placeholder='Twoja wiadomość' required></textarea>
          <button type='submit' className='btn btn-primary'>Wyślij wiadomość</button>
        </form>
      </div>
    </section>
  )
}

export default Contact