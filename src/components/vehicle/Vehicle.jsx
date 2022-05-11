import React from 'react'
import './vehicle.css'
import stacja from '../../assets/stacja.webp'

const Vehicle = () => {
  return (
    <section className='vehicle'>
      <h5>Potrzebujesz przegląd?</h5>
      <h2>Stacja kontroli Pojazdów</h2>
      <div className="vehicle--content">
        <article className='vehicle--article'>
          <img src={stacja} alt="Stacja kontroli pojazdów" />
          <p>Do państwa dyspozycji oddajemy nowoczesną stację kontroli pojazdów. Dysponujemy nowoczesnym sprzętem, pełną ścieżkę diagnostyczną, w skład której wchodzą płyty do badania siły hamowania pojazdów, testery do badania amortyzatorów oraz szarpaki do wykrywania luzów w zawieszeniu.
            <br /><br />
            Poza tym dysponujemy wieloma urządzeniami specjalistycznymi zapewniając dobrze i sprawnie wykonane badanie techniczne pojazdu, którego masa nie przekracza 3.5 tony. Naszym atutem są przede wszystkim wysoce wykwalifikowani pracownicy. Posiadamy certyfikat Polskiej Izby Stacji Kontroli Pojazdów. Klientom zapewniamy fachową oraz miłą obsługę. Nowoczesny i schludny wystrój sprawia, że każdy czuje się jak w domu.</p>
        </article>
        <article className='vehicle--range'>
          <h3>Zakres naszych badań: </h3>
          <div className="vehicle--range-container">
            <div className="vehicle--range-item">
              <h4>Symbole rodzajów pojazdów: </h4>
              <div className="vehicle--range-element">
              <span className="symbol">A</span>
              <p>Motocykle i motorowery</p>
              </div>
              <div className="vehicle--range-element">
              <span className="symbol">B</span>
              <p>Pojazdy samochodowe o dopuszczalnej masie całkowitej do 3,5 t, z wyłączeniem motocykli i motorowerów</p>
              </div>
              <div className="vehicle--range-element">
              <span className="symbol">T</span>
              <p>Ciągniki rolnicze</p>
              </div>
            </div>
            <div className="vehicle--range-item">
            <div className="vehicle--range-element">
              <h4>Symbole rodzajów badań:</h4>
              <span className="symbol">c</span>
              <p>Pojazdy przystosowane do zasilania gazem</p>
              </div>
            <div className="vehicle--range-element">
              <span className="symbol">d</span>
              <p>Pojazdy zarejestrowane po raz pierwszy za granicą lub pojazdy nowego typu wyprodukowane lub importowane w ilości jednej sztuki rocznie</p>
              </div>
            <div className="vehicle--range-element">
              <span className="symbol">e</span>
              <p>Pojazdy skierowane na badania techniczne przez organ kontroli ruchu drogowego lub starostę, dla których wymagane jest specjalistyczne badanie, oraz pojazdy, w których dokonano zmian konstrukcyjnych lub wymiany elementów powodujących zmianę danych w dowodzie rejestracyjnym</p>
              </div>
              
            </div>
          </div>
          
        </article>
      </div>
    </section>
  )
}

export default Vehicle