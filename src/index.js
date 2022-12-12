import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Intro from './Intro';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testemonial from './Testemonial';
import Contact from './Contact';
import Footer from './Footer';

import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <Header />
    <Intro />
    <About />
    <Resume />
    <Portfolio />
    <Testemonial />
    <Contact />
    <Footer />
  </React.StrictMode>
);
