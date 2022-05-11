import React from 'react'
import './map.css'

const Map = () => {
  return (
    <section id="map">
      <h5>Nie wiesz jak dojechać?</h5>
      <h2>Mapa</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.2213364524864!2d19.535869051712442!3d51.728986879572375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a333e1d78bca1%3A0x7456e075a27c67e8!2sOlech-Service%20s.c.%20Kwiasowski%20P!5e0!3m2!1spl!2spl!4v1652300040426!5m2!1spl!2spl" className='mapa' loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
    </section>
  )
}

export default Map