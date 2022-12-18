import * as React from 'react';
import './Intro.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function introSection() {
  return (
    <Container id="intro">
      {/* <Box className="introText" sx={{ bgcolor: '#cfe8fc', height: '80vh' }}> */}
      <Box className="introText">
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
              className="socialLinksIntro"
              aria-label="Github"
              href="https://github.com/Bl4ckH4wkGER"
              target="_blank"
              rel="noreferrer noopener">
              <GitHubIcon />
            </a>
            <a
              className="socialLinksIntro"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/sven-otto/"
              target="_blank"
              rel="noreferrer noopener">
              <LinkedInIcon />
            </a>
          </Stack>
          <Stack spacing={2} direction="row">
            <a className="buttonLinks" href="#resume">
              Resume
            </a>
            <a className="buttonLinks" href="#contact">
              Contact
            </a>
          </Stack>
          <a className="downPageArrrow" href="#about">
            <KeyboardArrowDownIcon />
          </a>
        </div>
      </Box>
    </Container>
  );
}

export default introSection;
