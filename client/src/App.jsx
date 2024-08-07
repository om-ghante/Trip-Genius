import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Main from './components/phase-zero/Main';
import Sample from './components/phase-zero/sample';

function App() {

  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/sample' element={<Sample />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App
