import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Main from './components/phase-zero/Main';
import Sample from './components/phase-zero/sample';
import Dashboard from './components/phase-zero/Dashboard';
import Sampletwo from './components/phase-zero/sampletwo';
import RefrshHandler from './components/phase-zero/RefrshHandler';
import PageNotFound from './components/phase-zero/PageNotFound';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="153722855618-ded8iqc9cs6p9a5d77i0hun557mkmfjm.apps.googleusercontent.com">
        <Main />
      </GoogleOAuthProvider>
    );
  };

  return (
    <HelmetProvider>
      <Router>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<GoogleAuthWrapper />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route index path="sample" element={<Sample />} />
            <Route path="sampletwo" element={<Sampletwo />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
