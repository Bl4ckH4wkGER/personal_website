import * as React from 'react';
import './About.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function About() {
  return (
    <Container id="about">
      <Box>
        <img src="path/goes/here" alt="profile image" />
      </Box>
      <Box>
        <h2>About me</h2>
        <div>
          <p>
            Customer-obsessed and progress-driven Product Manager with a strong track record of
            collaboration with Product Design, Engineering teams, and other company stakeholders.
            Experienced working in both Kanban and Scrum team environments.
          </p>
          <p>
            Well-versed in managing a product roadmap in line with company visions and OKRs. Adept
            at making data-informed decisions and gathering community feedback through a multitude
            of channels. In-depth knowledge of a product base heavily centered on user-created
            content and community engagement. General knowledge of web tech architecture with active
            experience in front-end development including HTML, CSS, JavaScript, jQuery, and
            React.js.
          </p>
          <p>
            Team-oriented and passionate with a strong work ethic and good eye for detail. Committed
            and success driven with a vested interest in efficiency and organization. Focused,
            productive, and balanced under pressure with steady awareness of larger goals. Confident
            team leader and project manager.
          </p>
          <ul>
            <li>
              <b>Location:</b> Poulsbo, WA
            </li>
            <li>
              <b>Nationality:</b> German
            </li>
            <li>
              <b>Study:</b> Friedrich Schiller University
            </li>
            <li>
              <b>Languages:</b> German, English, French
            </li>
            <li>
              <b>Interests:</b> Weightlifting, cars, horology
            </li>
            <li>
              <b>Employment:</b> Geocaching HQ
            </li>
          </ul>
        </div>
      </Box>
    </Container>
  );
}
export default About;
