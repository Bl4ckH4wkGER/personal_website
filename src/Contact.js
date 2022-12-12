import * as React from 'react';
import './Contact.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Container id="contact">
      <h2>
        <EmailIcon />
        Get in touch.
      </h2>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }
        }}
        noValidate
        autoComplete="off">
        <TextField id="name" defaultValue="Name" />
        <TextField id="email" defaultValue="Email" />
        <TextField id="message" multiline rows={4} defaultValue="Message" />
        <Button
          variant="outlined"
          onClick={() => {
            alert('clicked');
          }}>
          Submit Message
        </Button>
      </Box>
      <Box>
        <p>Thanks for stopping by!</p>
        <p>
          Did something spark your interest? Don&apos;t hesitate to reach out. I&apos;m always
          availble to talk Product Management, Agile, or other shared interests.
        </p>
        <Stack direction="column">
          <a href="mailto:svenotto3110@gmail.com">
            <EmailIcon />
            svenotto3110@gmail.com
          </a>
          <a
            href="https://www.google.com/maps/place/Poulsbo,+WA+98370/@47.7420916,-122.6788777,13z"
            target={'_blank'}
            rel="noreferrer">
            <LocationOnIcon />
            Poulsbo, WA
          </a>
          <a href="https://www.linkedin.com/in/sven-otto" target={'_blank'} rel="noreferrer">
            <LinkedInIcon />
            Sven Otto
          </a>
          <a href="https://github.com/Bl4ckH4wkGER" target={'_blank'} rel="noreferrer">
            <GitHubIcon />
            Bl4ckH4wkGER
          </a>
        </Stack>
      </Box>
    </Container>
  );
}
export default Contact;
