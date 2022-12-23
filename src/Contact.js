import * as React from 'react';
import './Contact.css';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Container id="contact">
      <h2 className="contactHeading">
        <EmailIcon sx={{ width: '48px', height: '48px' }} />
        Get in touch.
      </h2>
      <Grid container className="contactBox" direction={{ xs: 'column', sm: 'column', md: 'row' }}>
        <Grid item className="contactText" xs={6}>
          <p>Thanks for stopping by!</p>
          <p>
            Did something spark your interest? Don&apos;t hesitate to reach out. I&apos;m always
            available to talk Product Management, Agile, or other shared interests.
          </p>
        </Grid>
        <Grid item className="contactLinks" xs={6}>
          <Stack direction="column">
            <a className="contactLinks" href="mailto:svenotto3110@gmail.com">
              <EmailIcon />
              svenotto3110@gmail.com
            </a>
            <a
              className="contactLinks"
              href="https://www.google.com/maps/place/Poulsbo,+WA+98370"
              target={'_blank'}
              rel="noreferrer">
              <LocationOnIcon />
              Poulsbo, WA
            </a>
            <a
              className="contactLinks"
              href="https://www.linkedin.com/in/sven-otto"
              target={'_blank'}
              rel="noreferrer">
              <LinkedInIcon />
              Sven Otto
            </a>
            <a
              className="contactLinks"
              href="https://github.com/Bl4ckH4wkGER"
              target={'_blank'}
              rel="noreferrer">
              <GitHubIcon />
              Bl4ckH4wkGER
            </a>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Contact;
