import React from 'react'
import './food.css';
import food from './food.avif';
import safety from './safety.jpeg';
const Food = () => {
    return (
        <div className='box-1'>
            <img src={food} className='img-box1' alt="food" />
            <div className="promoted">Promoted</div>
            <div className='off'>50% OFF up to 100</div>
            <div className="minutes">38 min</div>
            <h1 className="heading-box1">Center Point Restaurant</h1>
            <p>North Indian, Chinese</p>
            <div className="under-line">

            </div>
            
            <img src={safety} className='img-two' alt="safety"/>
            <div className="right">
            <span>Follows all Max Safety measures to ensure your food is safe</span>
            </div>
            
       

        </div>
    )
}

export default Food