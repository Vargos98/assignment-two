import React from 'react'
import './order.css';
import background from './bg.jpeg';
import {CiLocationOn} from 'react-icons/ci';
import {BiSearch} from 'react-icons/bi';
const Order = () => {
  return (
    <div className='box-three'>
        <img src={background}  className='img-bgTwo'alt="background" />
        <div className="shade-two"></div>
        <h1 className="heading-order">Zomato</h1>
        <p className="desc">Discover the best food & drinks in Jaipur</p>
        <div className="search">
            <div className="search-item">
                <CiLocationOn/>
                <input type="text" className='input' placeholder=' Jaipur, Rajasthan            |' />
               
                <BiSearch/>
                <input type="text" className='input-in' placeholder=' Search for restaurants, cuisine or a dish' />
            </div>
        </div>

    </div>
  )
}

export default Order