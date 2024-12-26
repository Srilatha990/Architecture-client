import React from 'react';
import { Grid, Card, CardMedia, Typography } from '@mui/material';
import Infographics_1 from '../../images/Infographics-1.avif'
import Infographics_2 from '../../images/Infographics-2.jpg'
import Infographics_3 from '../../images/Infographics-3.jpg'

function InfographicsSection() {
  const infographics = [
    { title: 'Service Process', img: Infographics_1},
    { title: 'Tech Innovations', img: Infographics_2},
    { title: 'Market Analysis', img: Infographics_3 },
  ];

  return (
    <Grid container spacing={4} justifyContent="center">
      {infographics.map((info, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ transition: 'all 0.3s ease', '&:hover': { transform: 'scale(1.0001)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' } }}>
            <CardMedia component="img" image={info.img} alt={info.title} />
            <Typography variant="h6" sx={{ padding: '16px' }} align="center">
              {info.title}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default InfographicsSection;
