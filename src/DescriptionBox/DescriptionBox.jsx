import React from 'react'
import './DescriptionBox.css';
 function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className='description-nav-box fade'>Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of goods and services over the internet. These websites allow businesses and individuals to conduct transactions electronically, providing a digital space where customers can browse products or services, make selections, and complete purchases using various payment methods.</p>
           
            <p>These platforms leverage technology to provide a convenient shopping experience, reach a global audience, and operate 24/7.</p>
        </div>
    </div>
  )
}
export default DescriptionBox;
