import * as React from 'react';
import './Header.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Header() {
  return (
    <Box className="header">
      <Button>
        <a className="headAnchorLink" href="#about">
          About
        </a>
      </Button>
      <Button>
        <a className="headAnchorLink" href="#resume">
          Resume
        </a>
      </Button>
      <Button>
        <a className="headAnchorLink" href="#portfolio">
          Portfolio
        </a>
      </Button>
      <Button>
        <a className="headAnchorLink" href="#testemonials">
          Testemonials
        </a>
      </Button>
      <Button>
        <a className="headAnchorLink" href="#contact">
          Contact
        </a>
      </Button>
    </Box>
  );
}
export default Header;
