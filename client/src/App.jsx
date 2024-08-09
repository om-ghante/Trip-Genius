import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import Main from './components/phase-zero/Main';
import Sample from './components/phase-zero/sample';
import Dashboard from './components/phase-zero/Dashboard';
import Sampletwo from './components/phase-zero/sampletwo';

function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route index path="sample" element={<Sample />} />
              <Route path="sampletwo" element={<Sampletwo />} />
            </Route>
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

export default App;
