import React from 'react';
import './Offers.scss';
import exclusive_image from '../../Assets/exclusive_image.png';

 function Offers() {
  return (
    <div className='offers'>
        <div className='offers-left'>
         <h1>Exclusive</h1>
         <h1>Offers For You</h1>
         <p>ONLY ON BEST SELLERS PRODUCTS</p>
         <a href='#checkbox'><button className='check'>Check Now</button></a>
        </div>
        <div className='offers-right'>
            <img src={exclusive_image} alt=''/>

        </div>
          
    </div>
  )
}

export default Offers;
