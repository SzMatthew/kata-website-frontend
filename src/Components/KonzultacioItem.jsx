import React from 'react';
import './SCSS/KonzultacioItem.scss';

const KonzultacioItem = ({ title, price, description}) => {
  return (
    <div className='item-wrapper'>
      <div className='header-wrapper'>
        <span className='title'>{title}</span>
        
      </div>
      <p className='description'>{description}</p>
      <span className='price'>{price} Ft/Alkalom</span>
    </div>
  )
}

export default KonzultacioItem