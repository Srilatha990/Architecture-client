// 



import React from 'react';
import { Container, Typography, Link, Box, IconButton, Grid, useTheme } from '@mui/material';
import { Facebook, LinkedIn, Instagram, GitHub } from '@mui/icons-material';

function Footer() {
  const theme = useTheme(); // Access the current theme

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#603F83FF', // Black background for dark mode
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#C7D3D4FF', // White text for dark mode
        padding: '40px 0',
        marginTop: '60px',
        textAlign: 'left',
        transition: 'background-color 0.3s ease', // Smooth transition for background change
      }}
    >
      <Container maxWidth="xl"> {/* Changed to maxWidth="xl" to utilize more width */}
        <Grid container spacing={4} justifyContent="space-between">
          {/* First Part: Logo and Content */}
          <Grid item xs={12} sm={3}>
            <Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#EDE8F5' }}>
                ARCHITECT
              </Typography>
              <Typography variant="body1" sx={{ color: '#ADBBDA', marginTop: '15px' }}>
              Passionate about creating innovative architectural designs that blend functionality with aesthetic excellence. Dedicated to shaping inspiring spaces that enhance the lives of those who inhabit them.
              </Typography>
            </Box>
          </Grid>

          {/* Second Part: Quick Links */}
          <Grid item xs={12} sm={2}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#EDE8F5' }}>
                Quick Links
              </Typography>
              <Link
                href="/aboutus"
                color="inherit"
                sx={{
                  display: 'block',
                  color: '#ADBBDA',
                  marginBottom: '10px',
                  textDecoration: 'none', // Remove underline
                }}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                color="inherit"
                sx={{
                  display: 'block',
                  color: '#ADBBDA',
                  marginBottom: '10px',
                  textDecoration: 'none',
                }}
              >
                Contact Us
              </Link>
              <Link
                href="/projects"
                color="inherit"
                sx={{
                  display: 'block',
                  color: '#ADBBDA',
                  marginBottom: '10px',
                  textDecoration: 'none',
                }}
              >
                Projects
              </Link>
              <Link
                href="/faqs"
                color="inherit"
                sx={{
                  display: 'block',
                  color: '#ADBBDA',
                  textDecoration: 'none',
                }}
              >
                FAQs
              </Link>
            </Box>
          </Grid>

          {/* Third Part: Company */}
          <Grid item xs={12} sm={2}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#EDE8F5' }}>
                Company
              </Typography>
              <Link
                href="/privacy-policy"
                color="inherit"
                sx={{
                  display: 'block',
                  color: '#ADBBDA',
                  marginBottom: '10px',
                  textDecoration: 'none',
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                color="inherit"
                sx={{
                  display: 'block',
                  color: '#ADBBDA',
                  marginBottom: '10px',
                  textDecoration: 'none',
                }}
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                color="inherit"
                sx={{
                  display: 'block',
                  color: '#ADBBDA',
                  marginBottom: '10px',
                  textDecoration: 'none',
                }}
              >
                Cookie Policy
              </Link>
              <Link
                href="/faqs"
                color="inherit"
                sx={{
                  display: 'block',
                  color: '#ADBBDA',
                  textDecoration: 'none',
                }}
              >
                FAQs
              </Link>
            </Box>
          </Grid>

          {/* Fourth Part: Address and Social Icons */}
          <Grid item xs={12} sm={3}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#EDE8F5' }}>
                Address
              </Typography>
              <Typography variant="body1" sx={{ color: '#ADBBDA', marginBottom: '20px' }}>
                Architecture<br />
                8-3-960/3/1<br />
                Srinagar colony, Near Axis Bank<br />
                Hyderabad -500074
              </Typography>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton href="https://www.facebook.com" color="inherit">
                  <Facebook />
                </IconButton>
                <IconButton href="https://www.twitter.com" color="inherit">
                  <GitHub />
                </IconButton>
                <IconButton href="https://www.instagram.com" color="inherit">
                  <Instagram />
                </IconButton>
                <IconButton href="https://www.youtube.com" color="inherit">
                  {/* Use your YouTube icon here */}
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} architecture.com. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;


