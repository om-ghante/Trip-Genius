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
import UserProfile from './components/phase-three/UserProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="350622266142-k70s66eum07o9qr2cm30776unv9jq9d0.apps.googleusercontent.com">
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
            <Route index path="profile" element={<UserProfile />}/>
            <Route path="sample" element={<Sample />} />
            <Route path="sampletwo" element={<Sampletwo />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
