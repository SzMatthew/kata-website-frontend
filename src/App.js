import React from 'react';
import { Outlet } from 'react-router-dom';
import CoverImage from './Components/Cover-Image/Cover-Image.jsx';
import Header from './Components/Header/Header.jsx';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import './Global.scss';

const App = () => {
  return (
    <>
      <Header />
      <CoverImage />
      <Navigation />
      <Outlet/>
      <Footer/>
    </>
    
  );
}

export default App;
