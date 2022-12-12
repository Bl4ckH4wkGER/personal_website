import * as React from 'react';
import './Header.css';

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['About', 'Resume', 'Portfolio', 'Testimonials', 'Contact'];

// function goToAnchor(anchor) {
//   var loc = document.location.toString().split('#')[0];
//   document.location = loc + '#' + anchor;
//   return false;
// }

function Header() {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  return (
    <div>
      <a href="#header">Jump to Header</a>
      <a href="#intro">Jump to Intro</a>
      <a href="#about">Jump to About</a>
      <a href="#resume">Jump to Resume</a>
      <a href="#portfolio">Jump to Portfolio</a>
      <a href="#testemonial">Jump to Testemonial</a>
      <a href="#contact">Jump to Contact</a>
    </div>
    // <AppBar id="header" position="static">
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="/"
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'none', md: 'flex' },
    //           fontFamily: 'monospace',
    //           fontWeight: 700,
    //           letterSpacing: '.3rem',
    //           color: 'inherit',
    //           textDecoration: 'none'
    //         }}>
    //         LOGO
    //       </Typography>

    //       <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
    //         <IconButton
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="inherit">
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left'
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left'
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' }
    //           }}>
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={handleCloseNavMenu}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //       <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
    //       <Typography
    //         variant="h5"
    //         noWrap
    //         component="a"
    //         href=""
    //         sx={{
    //           mr: 2,
    //           display: { xs: 'flex', md: 'none' },
    //           flexGrow: 1,
    //           fontFamily: 'monospace',
    //           fontWeight: 700,
    //           letterSpacing: '.3rem',
    //           color: 'inherit',
    //           textDecoration: 'none'
    //         }}>
    //         LOGO
    //       </Typography>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
    //         {pages.map((page) => (
    //           <Button
    //             key={page}
    //             onClick={handleCloseNavMenu}
    //             sx={{ my: 2, color: 'white', display: 'block' }}>
    //             {page}
    //           </Button>
    //         ))}
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );
}
export default Header;
