import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../phase-one/NavBar';
import Home from '../phase-one/Home';
import WelcomePage from '../phase-one/Welcomepage';
import HowItWorks from '../phase-one/HowItWorks';

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
      {/*<Banners />*/}
    </>
  );
}

export default Main;
