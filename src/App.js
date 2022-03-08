import React from 'react';
import { Outlet } from 'react-router-dom';
import CoverImage from './Components/Cover-Image/Cover-Image.jsx';
import Header from './Components/Header/Header.jsx';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import { useLocation } from "react-router-dom"
import './Global.scss';

const App = () => {
  let location = useLocation();
  return (
    <>
      <Header />
      <CoverImage />
      <Navigation />
      <Outlet/>
      {
        location.pathname !== '/kapcsolat'
          ? <Footer/>
          : <></>
      }
    </>
  );
}

export default App;
