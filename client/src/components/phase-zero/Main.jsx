import React,{useState} from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '../phase-one/NavBar';
import Home from '../phase-one/Home';
import WelcomePage from '../phase-one/Welcomepage';
import Footer from '../phase-one/Footer';
import Login from '../phase-two/Login';
import Register from '../phase-two/Register';
import ForgotPass from '../phase-two/ForgotPass';

const Main = () => {
  const [ islopen, setLopen ] = useState(false);
  const [ isropen, setRopen ] = useState(false);
  const [ isfpassopen, setfpassOpen ] = useState(false);
  
  const toggleloginPopup = () =>{
    setLopen(!islopen);
  };

  const toggleregisterPopup = () => {
    setRopen(!isropen);
  };

  const toggleforgotpass = () => {
    setfpassOpen(!isfpassopen);
  }

  return (
    <>
      <Helmet>
        <title>Trip Genius | Home</title>
      </Helmet> 

      <NavBar setLoginOpen={toggleloginPopup} setRegisterOpen={toggleregisterPopup} />
      <Home />
      <WelcomePage />
      <Footer />
      
        {islopen && (
            <Login closePopup={toggleloginPopup} openrPopup={toggleregisterPopup}  openfPopup={toggleforgotpass}/>
        )}

        {isropen && (
            <Register closePopup={toggleregisterPopup} openPopup={toggleloginPopup}/>
        )}

        {isfpassopen && (
            <ForgotPass closePopup={toggleforgotpass} openPopup={toggleloginPopup} />
        )}

    </>
  );
}

export default Main;
