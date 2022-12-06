import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function Resume() {
  return (
    <Container>
      <Box>
        <h2>Work</h2>
        <h3>Product Manager</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Geocaching HQ icon"
              src="/IMAGE_PATH_HERE"
              sx={{ width: 24, height: 24 }}
            />
            <p>Geocaching HQ - Jul 2022 to Present</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h3>Associate Product Manager</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Geocaching HQ icon"
              src="/IMAGE_PATH_HERE"
              sx={{ width: 24, height: 24 }}
            />
            <p>Geocaching HQ - Feb 2021 - Jul 2022</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h3>Community Volunteer Support Lead</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Geocaching HQ icon"
              src="/IMAGE_PATH_HERE"
              sx={{ width: 24, height: 24 }}
            />
            <p>Geocaching HQ - Dec 2019 - Jul 2021</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h3>Community Volunteer Suppport Coordinator</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Geocaching HQ icon"
              src="/IMAGE_PATH_HERE"
              sx={{ width: 24, height: 24 }}
            />
            <p>Geocaching HQ - Jan 2018 - Dec 2019</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h3>Guest Experience coordinator</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Geocaching HQ icon"
              src="/IMAGE_PATH_HERE"
              sx={{ width: 24, height: 24 }}
            />
            <p>Geocaching HQ - Jul 2017 - Jun 2018</p>
          </Stack>
          <p>Details go here</p>
        </div>
        <h2>Education</h2>
        <h3>Master of Arts</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Friedrich Schiller University icon"
              src="/IMAGE_PATH_HERE"
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
              src="/IMAGE_PATH_HERE"
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
            <Avatar
              alt="Scrum Alliance icon"
              src="/IMAGE_PATH_HERE"
              sx={{ width: 24, height: 24 }}
            />
            <p>Scrum Alliance, August 2022</p>
          </Stack>
        </div>
        <h3>Game Thinking Masterclass</h3>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Game Thinking Academy icon"
            src="/IMAGE_PATH_HERE"
            sx={{ width: 24, height: 24 }}
          />
          <p>Game Thinking Academy, April 2022</p>
        </Stack>
        <h3>Product Management</h3>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="General Assembly icon"
            src="/IMAGE_PATH_HERE"
            sx={{ width: 24, height: 24 }}
          />
          <p>General Assembly, April 2021</p>
        </Stack>
        <h3>Certified Scrum Master</h3>
        <div>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Scrum Alliance icon"
              src="/IMAGE_PATH_HERE"
              sx={{ width: 24, height: 24 }}
            />
            <p>Scrum Alliance, Novenber 2020</p>
          </Stack>
        </div>
        <h3>Full-stack development with JavaScript </h3>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="University of Washington icon"
            src="/IMAGE_PATH_HERE"
            sx={{ width: 24, height: 24 }}
          />
          <p>University of Washington, September 2020</p>
        </Stack>
        <h2>Skills</h2>
      </Box>
    </Container>
  );
}
export default Resume;
