import * as React from 'react';
import './Header.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Box>
          <Button>
            <a href="#about">About</a>
          </Button>
          <Button>
            <a href="#resume">Resume</a>
          </Button>
          <Button>
            <a href="#portfolio">Portfolio</a>
          </Button>
          <Button>
            <a href="#testemonial">Testemonial</a>
          </Button>
          <Button>
            <a href="#contact">Contact</a>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
