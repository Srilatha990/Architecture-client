
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false); // Track hamburger animation
  const [scrolling, setScrolling] = useState(false); // Track scroll position
  const [user, setUser] = useState(null); // Track logged-in user
  const [anchorEl, setAnchorEl] = useState(null); // Manage menu for account options
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile screens
  const navigate = useNavigate();

  const navLinks = ['About Us', 'Services', 'Projects', 'Blogs', 'Faqs', 'Contact'];

  // Check if user is logged in when component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    console.log(user) ;// Retrieve user from localStorage
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Scroll Event Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    if (isMobile) {
      setDrawerOpen(false);
    }
    navigate(`/${link.replace(' ', '').toLowerCase()}`);
  };

  const loadHandler = () => {
    navigate('/');
  };

  const toggleHamburger = () => {
    setHamburgerActive(!hamburgerActive);
    setDrawerOpen(!drawerOpen);
  };

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to login page
  };

  const handleUsernameClick = (event) => {
    setAnchorEl(event.currentTarget); // Open the account options menu
  };

  const handleLogout = () => {
    setUser(null); // Clear user state to log out
    localStorage.removeItem('user'); // Remove user from localStorage
    setAnchorEl(null); // Close the menu
    navigate('/'); // Navigate to homepage after logout
  };

  const handleAccountClick = () => {
    navigate('/account'); // Navigate to account page
  };

  const mobileDrawer = (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      transitionDuration={300}
      sx={{
        width: '250px',
        '& .MuiDrawer-paper': {
          width: '250px',
        },
      }}
    >
      <List>
        <ListItem button onClick={() => setDrawerOpen(false)} sx={{ padding: '15px', display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton sx={{ padding: '5px' }}>
            <CloseIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </ListItem>
        {navLinks.map((link) => (
          <ListItem button key={link} onClick={() => handleLinkClick(link)}>
            <ListItemText primary={<Typography variant="h6">{link}</Typography>} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolling ? 'black' : 'transparent',
          color: scrolling ? 'white' : '#fffff',
          zIndex: 1300,
          width: '100%',
          boxShadow: scrolling ? '0px 4px 12px rgba(0,0,0,0.6)' : 'none',
          transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
          minHeight: '80px',
        }}
      >
        <Toolbar sx={{ height: '100%' }}>
          <Typography onClick={loadHandler} variant="h6" sx={{ flexGrow: 1, fontWeight: 700, cursor: 'pointer', textAlign: 'left', marginTop:'13px' }}>
            <h3>ARCHITECT</h3>
          </Typography>

          {/* Centered Nav Links */}
          {!isMobile && (
            <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  color="inherit"
                  sx={{
                    marginLeft: 3,
                    fontWeight: 600,
                    padding: '10px 15px',
                    color: 'inherit',
                    '&:hover': {
                      color: '#C7D3D4FF',
                    },
                  }}
                  onClick={() => handleLinkClick(link)}
                >
                  {link}
                </Button>
              ))}
            </div>
          )}

          {/* Hamburger Icon for Mobile */}
          {isMobile && (
            <IconButton
              edge="end"
              color="inherit"
              onClick={toggleHamburger}
              aria-label="menu"
              sx={{
                '& .MuiSvgIcon-root': {
                  transition: 'transform 0.3s ease',
                },
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <MenuIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>
          )}

          {/* Conditional Login/Username Display */}
          {!user ? (
            <Button color="inherit" onClick={handleLoginClick}>Login</Button> // Show Login if no user
          ) : (
            <IconButton color="inherit" onClick={handleUsernameClick}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {user.LastName} {/* Display user's first name */}
              </Typography>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Account Options Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={handleAccountClick}>Account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      {mobileDrawer}
    </>
  );
};

export default Navbar;
