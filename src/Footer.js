import * as React from 'react';
import './Footer.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <Container maxWidth="sm">
      <Fab color="primary" aria-label="up">
        <ArrowCircleUpIcon />
      </Fab>
      <Box>
        <div>
          <Stack direction="row">
            <a
              aria-label="Github"
              href="https://github.com/Bl4ckH4wkGER"
              target="_blank"
              rel="noreferrer noopener">
              <GitHubIcon />
            </a>
            <a
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/sven-otto/"
              target="_blank"
              rel="noreferrer noopener">
              <LinkedInIcon />
            </a>
          </Stack>
        </div>
      </Box>
    </Container>
  );
}
export default Footer;
