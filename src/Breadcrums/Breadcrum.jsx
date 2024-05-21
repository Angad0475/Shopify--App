import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png';
const Breadcrum=(props)=> {
  const {product} = props
  return (
    <div className='breadcrum'>
      HOME <img id='bread' src={arrow_icon} alt=''/> SHOP <img  id='bread' src={arrow_icon} alt=''/>
      {product.category} <img id='bread' src={arrow_icon} alt=''/> {product.name}
    </div>
  )
}
export default Breadcrum;
