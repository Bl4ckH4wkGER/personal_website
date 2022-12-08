import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <>
      <Container maxWidth="sm">
        <Fab color="primary" aria-label="down">
          <ArrowCircleUpIcon />
        </Fab>
        <Box>
          <div>
            <Stack direction="row">
              <IconButton>
                <GitHubIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </Stack>
          </div>
        </Box>
      </Container>
    </>
  );
}
export default Footer;
