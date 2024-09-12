import React from 'react'
import './NewsLetter.scss'

 function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on your Email</h1>
        <p>Subscibe to our newletter and stay updated</p>
    <div>
    <input type="email" placeholder='Your Email id'/>
    <button>Subscribe</button>
    </div>
    </div>
  )
}
export default NewsLetter;
