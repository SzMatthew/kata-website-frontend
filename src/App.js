import React from 'react';
import { Outlet } from 'react-router-dom';
import CoverImage from './Components/Cover-Image/Cover-Image.jsx';
import Header from './Components/Header/Header.jsx';
import Navigation from './Components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <Header />
      <CoverImage />
      <Navigation />
      <Outlet/>
    </>
    
  );
}

export default App;
