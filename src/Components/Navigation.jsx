import React, { useState, useEffect, useRef} from 'react';
import { Link, useLocation } from "react-router-dom";
import { GoThreeBars, GoX } from 'react-icons/go';
import './SCSS/Navigation.scss';

const Navigation = () => {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navigationRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      navigationRef.current.style.display = 'flex';
    } else {
      navigationRef.current.style.display = 'none';
    }
  }, [isOpen]);

  const handleOpen = () => {  
    setIsOpen(!isOpen);
  };

  return (
    <div className='navigation'>
      {
        isOpen
        ? <GoX onClick={handleOpen} className='navigation__icon'/>
        : <GoThreeBars onClick={handleOpen} className='navigation__icon'/>
      }
      <nav ref={navigationRef} className='navigation__content'>
        <Link to={`/`} className={location.pathname === '/' ? 'navigation__item navigation__item--active' : 'navigation__item'}>Kezdőlap</Link>
        <Link to={`/konzultacio-es-arak`} className={location.pathname === '/konzultacio-es-arak' ? 'navigation__item navigation__item--active' : 'navigation__item'}>Konzultáció és árak</Link>
        <Link to={`/rolam`} className={location.pathname === '/rolam' ? 'navigation__item navigation__item--active' : 'navigation__item'}>Rólam</Link>
        <Link to={`/kapcsolat`} className={location.pathname === '/kapcsolat' ? 'navigation__item navigation__item--active' : 'navigation__item'}>Kapcsolat</Link>
      </nav>
    </div>
    
  )
}

export default Navigation;