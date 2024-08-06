import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../phase-one/NavBar';
import Home from '../phase-one/Home';
import WelcomePage from '../phase-one/Welcomepage';
import HowItWorks from '../phase-one/HowItWorks';
import Footer from '../phase-one/Footer';
import AppAlert from '../phase-one/AppAlert';

{/*import Banners from '../phase-one/Banners';*/}

const Main = () => {
  return (
    <>
      <Helmet>
        <title>Trip Genius | Home</title>
      </Helmet>
      <NavBar />
      <Home />
      <WelcomePage />
      <HowItWorks />
      <AppAlert />
      <Footer />
      {/*<Banners />*/}
    </>
  );
}

export default Main;
