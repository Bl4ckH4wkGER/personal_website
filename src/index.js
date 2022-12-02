import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppHeader from './AppHeader';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <CssBaseline />
    {/* The rest of your application */}
    <AppHeader />
  </React.Fragment>
);
