import * as React from 'react';
import './Contact.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <Container>
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
        <div>
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
        </div>
      </Box>
    </Container>
  );
}
export default Contact;
