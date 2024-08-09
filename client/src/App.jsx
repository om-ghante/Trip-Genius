import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Main from './components/phase-zero/Main';
import Sample from './components/phase-zero/sample';
import Dashboard from './components/phase-zero/Dashboard';
import Sampletwo from './components/phase-zero/sampletwo';
import RefrshHandler from './components/phase-zero/RefrshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  return (
    <HelmetProvider>
      <Router>
        <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
        <Routes>
          <Route path="/" element={<Main />} />
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
