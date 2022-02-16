import React from 'react';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className='navigation-container'>
      <ul className='navigation'>
        <li className='item'>Kezdőlap</li>
        <li className='item'>Konzultáció és árak</li>
        <li className='item'>Rólam</li>
        <li className='item'>A folyamatról</li>
        <li className='item'>Vélemenyek</li>
        <li className='item'>Kapcsolat</li>
      </ul>
    </nav>
  )
}

export default Navigation;