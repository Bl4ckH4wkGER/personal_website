import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function introSection() {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
          <h1>I&apos;m Sven Otto.</h1>
          <p>Something about who I am as a professional.</p>
          <p>Something about me outside of work.</p>
          <div>
            <Stack direction="row">
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </div>
          <div>
            <Stack spacing={2} direction="row">
              <Button variant="outlined">Resume</Button>
              <Button variant="outlined">Contact</Button>
            </Stack>
          </div>
        </Box>
      </Container>
      <Button>
        <ArrowCircleDownIcon />
      </Button>
    </>
  );
}

export default introSection;
