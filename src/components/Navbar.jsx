
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import { useState } from 'react';
import { CssBaseline } from '@mui/material';
import { useNavigate } from "react-router-dom";

const pages = [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "Projects",
          url: "/projects",
        },
        {
          title: "Skills",
          url: "/skills",
        },
        {
                title: "Contact",
                url: "/contact",
              },
      ];
const Navbar = () => {
        const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static"
    sx={{backgroundColor:"#494949"}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <CssBaseline />
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#F17D10',
              textShadow:"2px 1px 1px white",
              textDecoration: 'none',
              cursor: "pointer"
            }}
          >
            S.Yılmaz
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon 
              sx={{color:"white"}}
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                  onClick={() => navigate(page.url)}
                  textAlign="center"> {page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 600,
              textShadow:"2px 1px 1px white",
              letterSpacing: '.3rem',
              color: '#F17D10',
              textDecoration: 'none',
            }}
          >
           S.Yılmaz
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,i) => (
              <Button
                key={i}
                onClick={() => {
                        handleCloseNavMenu();
                        navigate(page.url);
                      }}
                sx={{ my: 2, color: 'white',
                fontWeight:"bold",
                display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
