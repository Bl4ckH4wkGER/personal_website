import * as React from 'react';
import './Resume.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import ProgressBar from 'react-bootstrap/ProgressBar';

import FSU from './images/FSU.jpeg';
import GA from './images/GA.jpeg';
import GameThinkingAcademy from './images/GameThinkingAcademy.jpeg';
import GeocachingHQ from './images/GeocachingHQ.jpeg';
import ScrumAlliance from './images/ScrumAlliance.jpeg';
import UW from './images/UW.jpeg';

function Resume() {
  return (
    <Container id="resume">
      <Grid
        container
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', sm: 'flex-start', md: 'flex-start' }}
        className="resumeContent">
        <Grid item xs={3}>
          <h2 className="resumeHeadings">Work</h2>
        </Grid>
        <Grid item xs={9}>
          <Box className="work">
            <h3>Product Manager</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Geocaching HQ icon"
                  src={GeocachingHQ}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.geocaching.com/"
                    target="_blank"
                    rel="noreferrer noopener">
                    Geocaching HQ
                  </a>{' '}
                  - Jul 2022 to Present
                </p>
              </Stack>
              <ul>
                <li>
                  Act as Product Manager/Owner and Scrum Master for full-stack web team in a Scrum
                  environment
                </li>
                <li>
                  Replaced blackbox-like local storage API with modern, scalable, and maintainable
                  cloud storage API
                </li>
              </ul>
            </div>
            <h3>Associate Product Manager</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Geocaching HQ icon"
                  src={GeocachingHQ}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.geocaching.com/"
                    target="_blank"
                    rel="noreferrer noopener">
                    Geocaching HQ
                  </a>{' '}
                  - Feb 2021 to Jul 2022
                </p>
              </Stack>
              <ul>
                <li>
                  Completed AR technology POC, spearheaded technology innovation and learnings
                </li>
                <li>
                  Retired 3 legacy pages, reduced duplicate pages by 50%, increased monthly active
                  users of latest pages by 15%, saved ~4 hours/week of engineering maintenance and
                  support
                </li>
                <li>
                  Released 3 Marketing promotions, 1.5M unique participants, generated 45% YOY
                  increase of monthly active users
                </li>
                <li>
                  Automated data deletion solution, reduced staff time by &gt;50%, improved
                  submission turnaround time by 700%
                </li>
                <li>
                  Completed 136 SUSOPS stories & resolved 69 bugs, improved core page accessibility
                  by 20%, increased roadmap velocity of other web teams by 40%
                </li>
                <li>
                  Maintained analytics related code, enabled data-informed web product organization
                </li>
              </ul>
            </div>
            <h3>Community Volunteer Support Lead</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Geocaching HQ icon"
                  src={GeocachingHQ}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.geocaching.com/"
                    target="_blank"
                    rel="noreferrer noopener">
                    Geocaching HQ
                  </a>{' '}
                  - Dec 2019 to Jul 2021
                </p>
              </Stack>
              <ul>
                <li>Led team overseeing 300 Community Volunteers</li>
                <li>
                  Collaborated with Product as key ‘voice of the customer’ stakeholder for admin
                  tools
                </li>
                <li>Modernized and maintained 30 JavaScript-based scripts</li>
                <li>Advised stakeholders on sustainable gameplay and content guidelines</li>
              </ul>
            </div>
            <h3>Community Volunteer Suppport Coordinator</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Geocaching HQ icon"
                  src={GeocachingHQ}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.geocaching.com/"
                    target="_blank"
                    rel="noreferrer noopener">
                    Geocaching HQ
                  </a>{' '}
                  - Jan 2018 to Dec 2019
                </p>
              </Stack>
              <ul>
                <li>Provided bilingual customer service</li>
                <li> Managed on- and offboarding of volunteers</li>
                <li>QA-tested game tools and scripts</li>
                <li> Stewarded internal and community-facing documentation</li>
              </ul>
            </div>
            <h3>Guest Experience coordinator</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Geocaching HQ icon"
                  src={GeocachingHQ}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.geocaching.com/"
                    target="_blank"
                    rel="noreferrer noopener">
                    Geocaching HQ
                  </a>{' '}
                  - Jul 2017 to Jun 2018
                </p>
              </Stack>
              <ul>
                <li>Provided trilingual customer service</li>
                <li>Managed inventory and merchandise sales</li>
                <li>Handled all visitor-related communication</li>
              </ul>
            </div>
          </Box>
        </Grid>
      </Grid>
      <hr className="divider" />
      <Grid
        container
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', sm: 'flex-start', md: 'flex-start' }}
        className="resumeContent">
        <Grid item xs={3}>
          <h2 className="resumeHeadings">Education</h2>
        </Grid>
        <Grid item xs={9}>
          <Box className="education ">
            <h3>Master of Arts</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Friedrich Schiller University icon"
                  src={FSU}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.uni-jena.de/en"
                    target="_blank"
                    rel="noreferrer noopener">
                    Friedrich Schiller University Jena
                  </a>{' '}
                  - 2016
                </p>
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
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.uni-jena.de/en"
                    target="_blank"
                    rel="noreferrer noopener">
                    Friedrich Schiller University Jena
                  </a>{' '}
                  - 2014
                </p>
              </Stack>
              <p>English and American Studies (Major), Educational Studies (Minor)</p>
            </div>
          </Box>
        </Grid>
      </Grid>
      <hr className="divider" />
      <Grid
        container
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', sm: 'flex-start', md: 'flex-start' }}
        className="resumeContent">
        <Grid item xs={3}>
          <h2 className="resumeHeadings">Certificates</h2>
        </Grid>
        <Grid item xs={9}>
          <Box className="certificates">
            <h3>Certified Scrum Product Owner</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Scrum Alliance icon"
                  src={ScrumAlliance}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.scrumalliance.org/"
                    target="_blank"
                    rel="noreferrer noopener">
                    Scrum Alliance
                  </a>{' '}
                  - August 2022
                </p>
              </Stack>
              <p> </p>
            </div>
            <h3>Game Thinking Masterclass</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Game Thinking Academy icon"
                  src={GameThinkingAcademy}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.gamethinkingacademy.io/"
                    target="_blank"
                    rel="noreferrer noopener">
                    Game Thinking Academy
                  </a>{' '}
                  - April 2022
                </p>
              </Stack>
              <p> </p>
            </div>
            <h3>Product Management</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar alt="General Assembly icon" src={GA} sx={{ width: 24, height: 24 }} />
                <p>
                  <a
                    className="companyLinks"
                    href="https://generalassemb.ly/"
                    target="_blank"
                    rel="noreferrer noopener">
                    General Assembly
                  </a>{' '}
                  - April 2021
                </p>
              </Stack>
              <p> </p>
            </div>
            <h3>Certified Scrum Master</h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Scrum Alliance icon"
                  src={ScrumAlliance}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.scrumalliance.org/"
                    target="_blank"
                    rel="noreferrer noopener">
                    Scrum Alliance
                  </a>{' '}
                  - Novenber 2020
                </p>
              </Stack>
              <p> </p>
            </div>
            <h3>Full-stack development with JavaScript </h3>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="University of Washington icon"
                  src={UW}
                  sx={{ width: 24, height: 24 }}
                />
                <p>
                  <a
                    className="companyLinks"
                    href="https://www.washington.edu/"
                    target="_blank"
                    rel="noreferrer noopener">
                    University of Washington
                  </a>{' '}
                  - September 2020
                </p>
              </Stack>
              <p> </p>
            </div>
          </Box>
        </Grid>
      </Grid>
      <hr className="divider" />
      <Grid
        container
        direction={{ xs: 'column', sm: 'column', md: 'row' }}
        justifyContent="center"
        alignItems={{ xs: 'center', sm: 'flex-start', md: 'flex-start' }}
        className="resumeContent">
        <Grid item xs={3}>
          <h2 className="resumeHeadings">Skills</h2>
        </Grid>
        <Grid item xs={9}>
          <Box className="skills">
            <Grid container direction={{ xs: 'column', sm: 'row', md: 'row' }}>
              <Grid item xs={12} sm={6} md={6} className="skillsCell">
                <h3>Frontend development</h3>
                React
                <ProgressBar now={80} />
                HTML
                <ProgressBar now={60} />
                CSS
                <ProgressBar now={40} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} className="skillsCell">
                <h3>Tools</h3>
                Jira
                <ProgressBar now={90} />
                Confluence
                <ProgressBar now={70} />
                Miro
                <ProgressBar now={70} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} className="skillsCell">
                <h3>Agile</h3>
                Product Ownership
                <ProgressBar now={90} />
                Scrum
                <ProgressBar now={70} />
                Kanban
                <ProgressBar now={70} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} className="skillsCell">
                <h3>Quantitative</h3>
                Tableau
                <ProgressBar now={80} />
                Power BI
                <ProgressBar now={60} />
                Google Analytics
                <ProgressBar now={60} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} className="skillsCell">
                <h3>Qualitative</h3>
                Field research
                <ProgressBar now={90} />
                User interviews
                <ProgressBar now={80} />
                User testing
                <ProgressBar now={80} />
              </Grid>
              <Grid item xs={12} sm={6} md={6} className="skillsCell">
                <h3>Planning</h3>
                Product roadmap
                <ProgressBar now={80} />
                MVPs
                <ProgressBar now={80} />
                Competitive analysis
                <ProgressBar now={60} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Resume;
