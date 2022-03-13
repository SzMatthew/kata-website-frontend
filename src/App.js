import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import CoverImage from './Components/Cover-Image/Cover-Image.jsx';
import Header from './Components/Header/Header.jsx';
import Navigation from './Components/Navigation/Navigation';
import Footer from './Components/Footer/Footer';
import { useLocation } from "react-router-dom";
import { useAppContext } from './Contexts/app-context';
import './Global.scss';

const App = () => {
  let location = useLocation();
  const { initialLoading } = useAppContext();
  
  useEffect(() => {
    initialLoading();
  }, []);

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
