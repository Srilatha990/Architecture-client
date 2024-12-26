

import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Background Section */}
      <Box
        sx={{
          backgroundImage: 'url("/images/about-page-img.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: 2,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
          }}
        >
          About Us
        </Typography>
      </Box>

      {/* Content Section */}
      <Container maxWidth="1500px" sx={{ mt: 8 }}>
        {/* First Section: Stats Cards */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ marginTop: '100px' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: 'primary.main',
              textAlign: 'center',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Why Choose Us
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'text.secondary',
            }}
          >
            We blend innovation and expertise to redefine architectural excellence.
          </Typography>

          <Grid container spacing={4}>
  {[
    {
      title: 'Years of Experience',
      value: '10+',
      image: '/images/experience.png',
    },
    {
      title: 'Clients Served',
      value: '200+',
      image: '/images/clients.png',
    },
    {
      title: 'Projects Completed',
      value: '500+',
      image: '/images/projects.png',
    },
    {
      title: 'Awards Won',
      value: '15+',
      image: '/images/awards.png',
    },
  ].map((stat, index) => (
    <Grid item xs={12} sm={6} md={3} key={index}>
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          boxShadow: 3,
          height: 120, // Fixed height for uniformity
        }}
      >
        <Box
          component="img"
          src={stat.image}
          alt={stat.title}
          sx={{
            width: 80,
            height: 80,
            objectFit: 'cover',
            marginLeft: 2, // Spacing between the image and card edge
            marginRight: 2, // Spacing between the image and content
          }}
        />
        <CardContent
          sx={{
            flexGrow: 1, // Ensures content takes remaining space
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: '600', color: 'primary.main' }}
          >
            {stat.value}
          </Typography>
          <Typography sx={{ fontWeight: '600', mt: 1 }}>{stat.title}</Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


        </motion.div>

        {/* Second Section: Mission & Vision */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ marginTop: '1rem' }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/mission-vission.avif"
                alt="Mission and Vision"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Mission */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '700',
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Mission
                  <Box
                    sx={{
                      width: '40px',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      ml: 2,
                    }}
                  />
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Our mission is to design spaces that inspire and elevate lifestyles while blending aesthetics with functionality. We aim to create sustainable and innovative architectural solutions tailored to meet the unique needs of every client. By leveraging cutting-edge technology and timeless design principles, we bring visions to life, redefining excellence in architecture.
                </Typography>
              </Box>

              {/* Vision */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: '700',
                    color: 'primary.main',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Vision
                  <Box
                    sx={{
                      width: '40px',
                      height: '2px',
                      backgroundColor: 'primary.main',
                      ml: 2,
                    }}
                  />
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Our vision is to be a global leader in architectural innovation and sustainability. We aspire to shape the future of architecture by creating iconic, environmentally conscious structures that leave a lasting legacy. Through every project, we seek to inspire communities and set new standards in architectural craftsmanship.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </motion.div>

        {/* Third Section: Team Members Carousel */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn} style={{ marginTop: '4rem' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: '700',
              color: 'primary.main',
              textAlign: 'center',
              textTransform: 'uppercase',
              mb: 1,
            }}
          >
            Meet Our Team
          </Typography>

          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 4,
              color: 'text.secondary',
            }}
          >
            Our talented team of professionals brings creativity and expertise to every project.
          </Typography>

          <Slider {...sliderSettings}>
            {[
              { name: 'John Doe', role: 'Chief Architect', image: '/images/team1.jpg' },
              { name: 'Jane Smith', role: 'Project Manager', image: '/images/team2.jpg' },
              { name: 'Robert Brown', role: 'Design Lead', image: '/images/team3.jpg' },
              { name: 'Emily White', role: 'Sustainability Expert', image: '/images/team4.jpg' },
              { name: 'Michael Scott', role: 'Structural Engineer', image: '/images/team5.jpg' },
              { name: 'Dwight Schrute', role: 'Landscape Designer', image: '/images/team6.jpg' },
              { name: 'Pam Beesly', role: 'Interior Designer', image: '/images/team7.jpg' },
              { name: 'Jim Halpert', role: 'Urban Planner', image: '/images/team8.jpg' },
            ].map((member, index) => (
              <Box key={index} sx={{ p: 2 }}>
                <Card sx={{ boxShadow: 3, textAlign: 'center' }}>
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: '600', mt: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                      {member.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </motion.div>

      </Container>
    </>
  );
}

export default About;
