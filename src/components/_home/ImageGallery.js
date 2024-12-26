import React from 'react';
import { Grid, Card, CardMedia, Box, useTheme } from '@mui/material';
import { keyframes } from '@mui/system'; // For animations
import img1 from '../../images/ourWork-1.jpg';
import img2 from '../../images/ourWork-2.avif';
import img3 from '../../images/ourWork-3.jpg';
import img4 from '../../images/ourWork-4.jpg';
import img5 from '../../images/ourWork-5.avif';

// Define the fade-in animation for each image
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function ImageGallery() {
  const theme = useTheme(); // Use theme hook to access theme properties

  const images = [img1, img2, img3, img4, img5];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#f4f4f4', // Dark background if theme is dark
        padding: '60px 0',
        transition: 'all 0.3s ease',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {images.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.000001)', // Adding a subtle scale effect on hover
                  boxShadow: `0 4px 15px ${theme.palette.primary.light}`, // Use theme's primary color for box-shadow
                },
                animation: `${fadeIn} 1.5s ease-out`, // Applying fade-in effect on load
                opacity: 1,  // Set opacity to 1 (no longer hidden)
                borderRadius: '8px', // Apply border radius for smooth corners
                backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff', // Dark card background
                boxShadow: theme.palette.mode === 'dark' ? '0px 4px 15px rgba(0, 0, 0, 0.3)' : '0px 4px 15px rgba(0, 0, 0, 0.1)', // Box-shadow based on dark mode
              }}
            >
              <CardMedia
                component="img"
                image={image}
                alt={`Gallery Image ${index}`}
                sx={{
                  height: 'auto',
                  borderRadius: '8px',
                  objectFit: 'cover', // Ensures the image is properly scaled within the card
                  filter: 'brightness(0.85)', // Apply slight brightness adjustment if needed
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ImageGallery;
