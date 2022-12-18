import * as React from 'react';
import './Footer.css';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Box>
      <div className="footer">
        <a className="upPageArrrow" href="#intro">
          <KeyboardArrowUpIcon />
        </a>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <a
            className="socialLinksFooter"
            aria-label="Github"
            href="https://github.com/Bl4ckH4wkGER"
            target="_blank"
            rel="noreferrer noopener">
            <GitHubIcon />
          </a>
          <a
            className="socialLinksFooter"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/sven-otto/"
            target="_blank"
            rel="noreferrer noopener">
            <LinkedInIcon />
          </a>
        </Stack>
        <p>
          <b>© Copyright 2022 Sven Otto</b>
        </p>
      </div>
    </Box>
  );
}
export default Footer;
