import * as React from 'react';
import './Testemonial.css';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import { Container } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container id="testemonial" sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<CircleIcon />} {...a11yProps(0)} />
          <Tab icon={<CircleIcon />} {...a11yProps(1)} />
          <Tab icon={<CircleIcon />} {...a11yProps(2)} />
          <Tab icon={<CircleIcon />} {...a11yProps(3)} />
          <Tab icon={<CircleIcon />} {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p>
          Signal award to Sven for your effective and agile collaboration with Marketing on the
          definition of Signal’s Labyrinth. You showed what we can accomplish by working together
          toward a common goal with a win-win mindset.
        </p>
        <p>Allison Kelsey</p>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p>
          Signal award to Sven for working tirelessly with Engineering to update and improve the
          engineering triage process. We appreciate your transparency and creativity in identifying
          possible solutions and communicating these changes to the entire company. We love those
          videos!
        </p>
        <p>Senior Managament Team</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p>
          Signal award to Sven for running through a troubleshooting training with the Customer
          Service team to help us identify bugs in a more efficient way for everyone involved. The
          team really appreciates your approach to training and additional support you provide us.
          Thank you for always having us in your thoughts.
        </p>
        <p>Andrew Baldwin</p>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <p>
          Signal award to Sven for the successful launch of the Locationless Cache GC8NEAT. You saw
          an opportunity for a win-win-win, for the community, the company, and the Earth. And you
          worked hard to get the support for this concept, and collaborated with many HQ staff to
          make a smooth launch. Thanks for your tenacity and creativity!
        </p>
        <p>Senior Management Team</p>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <p>
          I feel so lucky to have gotten to attend a German Giga Event with you. Your knowledge of
          the game & passion for the community are admirable. I was constantly in awe of how you
          showed up for every geocacher and made personal connections with everyone you talked with.
          The world needs more Svens!
        </p>
        <p>Katie DiJulio</p>
      </TabPanel>
    </Container>
  );
}
