import React, { useState, useEffect, useRef} from 'react';
import { Link, useLocation } from "react-router-dom";
import { GoThreeBars } from 'react-icons/go';
import './SCSS/Navigation.scss';

const Navigation = () => {
  let location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileView, setIsMobileView ] = useState(false);
  const navigationRef = useRef(null);

  useEffect(() => {
    setIsMobileView(window.getComputedStyle(navigationRef.current).getPropertyValue('flex-direction') === 'column');
  }, []);

  const handleOpen = () => {
    if (isMobileView) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <nav className='navigation-container'>
      {
        isMobileView && !isOpen
        ? <GoThreeBars onClick={handleOpen} className='hamburger-icon'/>
        : <ul ref={navigationRef} className='navigation'>
            <li className={location.pathname === '/' ? 'item active' : 'item'}>
              <Link to={`/`}>Kezdőlap</Link>
            </li>
            <li className={location.pathname === '/konzultacio-es-arak' ? 'item active' : 'item'}>
              <Link to={`/konzultacio-es-arak`}>Konzultáció és árak</Link>
            </li>
            <li className={location.pathname === '/rolam' ? 'item active' : 'item'}>
              <Link to={`/rolam`}>Rólam</Link>
            </li>
            <li className={location.pathname === '/kapcsolat' ? 'item active' : 'item'}>
              <Link to={`/kapcsolat`}>Kapcsolat</Link>
            </li>
          </ul>
      }
    </nav>
    
  )
}

export default Navigation;