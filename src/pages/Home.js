








import React, { useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import HeroSection from '../components/_home/HeroSection';
import ImageGallery from '../components/_home/ImageGallery';
import VideoSection from '../components/_home/VideoSection';
import InfographicsSection from '../components/_home/InfographicsSection';
import Services from './Services';
import { keyframes } from '@mui/system'; 
import { useTheme } from '@mui/material/styles'; 
import AboutUsSection from '../components/_home/AboutSection';
import HomeProjects from './HomeProjects'; 
import Testimonials from '../components/_home/Testimonials';
import CTASection from '../components/_home/Cta';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

function Home() {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div style={{ width: '100%' }}>
    <Container >  {/* Added padding to make space for the navbar */}
    
      {/* Hero Section */}
      <HeroSection />
      
      {/* <HeroSection /> */}
      <AboutUsSection/>
      <HomeProjects/>
      <Testimonials/>
      <CTASection/>
     
    </Container>
    </div>
  );
}

export default Home;
