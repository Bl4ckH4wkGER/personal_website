import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './Header';
import Intro from './Intro';
import About from './About';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Testemonial from './Testemonial';
import Contact from './Contact';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <CssBaseline />
    <Header />
    <Intro />
    <Divider>
      <Chip label="About" />
    </Divider>
    <About />
    <Divider>
      <Chip label="Resume" />
    </Divider>
    <Resume />
    <Divider>
      <Chip label="Portfolio" />
    </Divider>
    <Portfolio />
    <Divider>
      <Chip label="Testemonial" />
    </Divider>
    <Testemonial />
    <Divider>
      <Chip label="Contact" />
    </Divider>
    <Contact />
  </React.Fragment>
);
