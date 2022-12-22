import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Intro from './Intro';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testemonials from './Testemonials';
import Contact from './Contact';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Intro />
    <About />
    <Resume />
    <Portfolio />
    <Testemonials />
    <Contact />
    <Footer />
  </React.StrictMode>
);
