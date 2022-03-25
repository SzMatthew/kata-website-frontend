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
    <div className='navigation-container'>
      {
        isOpen
        ? <GoX onClick={handleOpen} className='hamburger-icon'/>
        : <GoThreeBars onClick={handleOpen} className='hamburger-icon'/>
      }
      <nav ref={navigationRef} className='navigation'>
        <Link to={`/`} className={location.pathname === '/' ? 'item active' : 'item'}>Kezdőlap</Link>
        <Link to={`/konzultacio-es-arak`} className={location.pathname === '/konzultacio-es-arak' ? 'item active' : 'item'}>Konzultáció és árak</Link>
        <Link to={`/rolam`} className={location.pathname === '/rolam' ? 'item active' : 'item'}>Rólam</Link>
        <Link to={`/kapcsolat`} className={location.pathname === '/kapcsolat' ? 'item active' : 'item'}>Kapcsolat</Link>
      </nav>
    </div>
    
  )
}

export default Navigation;