import React from 'react';
import { Link, useLocation } from "react-router-dom"
import './Navigation.scss';

const Navigation = () => {
  let location = useLocation();

  return (
    <nav className='navigation-container'>
      <ul className='navigation'>
        <li className={location.pathname === '/' ? 'item active' : 'item'}>
          <Link to={`/`}>Kezdőlap</Link>
        </li>
        <li className={location.pathname === '/konzultacio-es-arak' ? 'item active' : 'item'}>
          <Link to={`/konzultacio-es-arak`}>Konzultáció és árak</Link>
        </li>
        <li className={location.pathname === '/rolam' ? 'item active' : 'item'}>
          <Link to={`/rolam`}>Rólam</Link>
        </li>
        <li className={location.pathname === '/folyamatrol' ? 'item active' : 'item'}>
          <Link to={'/folyamatrol'}>A folyamatról</Link>
        </li>
        <li className={location.pathname === '/velemenyek' ? 'item active' : 'item'}>
          <Link to={`/velemenyek`}>Vélemények</Link>
        </li>
        <li className={location.pathname === '/kapcsolat' ? 'item active' : 'item'}>
          <Link to={`/kapcsolat`}>Kapcsolat</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;