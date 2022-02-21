import React from 'react';
import { Link, useParams } from "react-router-dom"
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className='navigation-container'>
      <ul className='navigation'>
        <li className='item'>
          <Link to={`/`}>Kezdolap</Link>
        </li>
        <li className='item'>
          <Link to={`/konzultacio-es-arak`}>Konzultáció és árak</Link>
        </li>
        <li className='item'>
          <Link to={`/rolam`}>Rólam</Link>
        </li>
        <li className='item'>
          <Link to={`/folyamatrol`}>A folyamatról</Link>
        </li>
        <li className='item'>
          <Link to={`/velemenyek`}>Vélemenyek</Link>
        </li>
        <li className='item'>
          <Link to={`/kapcsolat`}>Kapcsolat</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;