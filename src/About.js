import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function About() {
  return (
    <Container>
      <Box>
        <img src="path/goes/here" alt="profile image" />
      </Box>
      <Box>
        <h2>About me</h2>
        <div>
          <ul>
            <li>Location:</li>
            <li>Nationality:</li>
            <li>Study:</li>
            <li>Languages:</li>
            <li>Interest:</li>
            <li>Employment:</li>
          </ul>
        </div>
      </Box>
    </Container>
  );
}
export default About;
