import React from 'react'
import pic1 from'../../assets/pic1.webp'
import pic2 from'../../assets/pic2.webp'
import pic3 from'../../assets/pic3.webp'


function AboutElement(props) {
  return (
    <article key={props.id}className='about--item'>
          <div className="about--image">
            <img src={props.img === 'pic1' && pic1 || props.img === 'pic2' && pic2 || props.img === 'pic3' && pic3 } alt="about" />
          </div>
          <div className="about--desc">
            {props.title && <h3>{props.title}</h3>}
            <p>{props.desc}</p>
          </div>
     </article>
  )
}

export default AboutElement