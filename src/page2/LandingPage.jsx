import React from 'react'
import './landing.css';
import landing from './landing.avif';
const LandingPage = () => {
  return (
    <div className='box-two'>
        <img src={landing}  className='img-bg'alt="background" />
        <div className="shade"></div>
        <h1 className="heading-landing">Explore the diversities of Bali</h1>
        <p className="para">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, officia enim id dignissimos minus dolore dolor veritatis temporibus laudantium eum tempora non porro modi quos?</p>
        <span className="btn">Explore Now</span>
    </div>
  )
}

export default LandingPage