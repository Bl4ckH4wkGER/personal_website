import * as React from 'react';
import './Intro.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function introSection() {
  return (
    <Container id="intro">
      <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
        <h1>I&apos;m Sven Otto.</h1>
        <p>
          I&apos;m a greater-Seattle based Product Manager currently working at Geocaching HQ. My
          focuses is on migrating our web offering to a modern tech-stack and inspiring outdoor
          adventure, exploration, and community.
        </p>
        <p>
          In my free time time, you can catch me weightlifting, exploring the great Pacific
          Northwest, and working on car or house projects.
        </p>
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
        <div>
          <Stack spacing={2} direction="row">
            <Button variant="outlined">Resume</Button>
            <Button variant="outlined">Contact</Button>
          </Stack>
        </div>
      </Box>
      <Fab color="primary" aria-label="down">
        <ArrowCircleDownIcon />
      </Fab>
    </Container>
  );
}

export default introSection;
