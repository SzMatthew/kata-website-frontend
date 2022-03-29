import React from 'react';
import './SCSS/KonzultacioItem.scss';

const KonzultacioItem = ({ title, price, description}) => {
  return (
    <div className='item'>
      <div className='item__header'>
        <span className='item__title'>{title}</span>
        
      </div>
      <p className='item__description'>{description}</p>
      <span className='item__price'>{price} Ft/Alkalom</span>
    </div>
  )
}

export default KonzultacioItem