import * as React from 'react';
import './Resume.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import FSU from './images/FSU.jpeg';
import GA from './images/GA.jpeg';
import GameThinkingAcademy from './images/GameThinkingAcademy.jpeg';
import GeocachingHQ from './images/GeocachingHQ.jpeg';
import ScrumAlliance from './images/ScrumAlliance.jpeg';
import UW from './images/UW.jpeg';

function Resume() {
  return (
    <Container>
      <Box>
        <h2>Work</h2>
        <h3>Product Manager</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Geocaching HQ icon" src={GeocachingHQ} sx={{ width: 24, height: 24 }} />
            <p>Geocaching HQ - Jul 2022 to Present</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h3>Associate Product Manager</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Geocaching HQ icon" src={GeocachingHQ} sx={{ width: 24, height: 24 }} />
            <p>Geocaching HQ - Feb 2021 to Jul 2022</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h3>Community Volunteer Support Lead</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Geocaching HQ icon" src={GeocachingHQ} sx={{ width: 24, height: 24 }} />
            <p>Geocaching HQ - Dec 2019 to Jul 2021</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h3>Community Volunteer Suppport Coordinator</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Geocaching HQ icon" src={GeocachingHQ} sx={{ width: 24, height: 24 }} />
            <p>Geocaching HQ - Jan 2018 to Dec 2019</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h3>Guest Experience coordinator</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Geocaching HQ icon" src={GeocachingHQ} sx={{ width: 24, height: 24 }} />
            <p>Geocaching HQ - Jul 2017 to Jun 2018</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h2>Education</h2>
        <h3>Master of Arts</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Friedrich Schiller University icon"
              src={FSU}
              sx={{ width: 24, height: 24 }}
            />
            <p>Friedrich Schiller University Jena - 2016</p>
          </Stack>
          <p>English and American Studies</p>
        </div>
        <h3>Bachelor of Arts</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Friedrich Schiller University icon"
              src={FSU}
              sx={{ width: 24, height: 24 }}
            />
            <p>Friedrich Schiller University Jena - 2014</p>
          </Stack>
          <p>English and American Studies (Major), Educational Studies (Minor)</p>
        </div>
        <h2>Certificates</h2>
        <h3>Certified Scrum Product Owner</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Scrum Alliance icon" src={ScrumAlliance} sx={{ width: 24, height: 24 }} />
            <p>Scrum Alliance, August 2022</p>
          </Stack>
        </div>
        <h3>Game Thinking Masterclass</h3>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Game Thinking Academy icon"
            src={GameThinkingAcademy}
            sx={{ width: 24, height: 24 }}
          />
          <p>Game Thinking Academy, April 2022</p>
        </Stack>
        <h3>Product Management</h3>
        <Stack direction="row" spacing={2}>
          <Avatar alt="General Assembly icon" src={GA} sx={{ width: 24, height: 24 }} />
          <p>General Assembly, April 2021</p>
        </Stack>
        <h3>Certified Scrum Master</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar alt="Scrum Alliance icon" src={ScrumAlliance} sx={{ width: 24, height: 24 }} />
            <p>Scrum Alliance, Novenber 2020</p>
          </Stack>
        </div>
        <h3>Full-stack development with JavaScript </h3>
        <Stack direction="row" spacing={2}>
          <Avatar alt="University of Washington icon" src={UW} sx={{ width: 24, height: 24 }} />
          <p>University of Washington, September 2020</p>
        </Stack>
        <h2>Skills</h2>
      </Box>
    </Container>
  );
}
export default Resume;
