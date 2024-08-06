import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'
import Main from './components/phase-zero/Main';

function App() {

  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App
