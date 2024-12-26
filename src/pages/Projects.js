

import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Box, CircularProgress, Button } from '@mui/material';
import axios from 'axios';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState(6); // State to manage displayed projects
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://architecture-backend-five.vercel.app/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Function to handle "Load More" button click
  const loadMoreProjects = () => {
    setDisplayedProjects((prev) => prev + 6); // Show 6 more projects on each click
  };

  return (
    <div>
      {/* First Section: Background Image with Heading */}
      <Box
        sx={{
          backgroundImage: `url('/images/service-page-img.jpg')`, // Replace with your background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'white',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Explore Our Work
        </Typography>
      </Box>

      {/* Gap Between First and Second Parts */}
      <Box sx={{ marginTop: '100px' }} />

      {/* Second Section: Main Heading */}
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: 6,
            color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
          }}
        >
          Our Projects
        </Typography>

        {/* Projects Grid */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <CircularProgress size={80} sx={{ color: '#603F83FF' }} />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {projects.length > 0 ? (
              projects.slice(0, displayedProjects).map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project._id}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      height: '260px', // Fixed height for uniformity
                      width: '90%', // Reduced width for a sleeker card
                      margin: '0 auto', // Center the card within the grid
                      textAlign: 'center',
                    }}
                  >
                    {/* Project Image */}
                    <Box
                      sx={{
                        width: '100%',
                        height: '200px', // Fixed height for the image area
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer', // Pointer cursor on hover
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                        },
                      }}
                      onClick={() => navigate(`/projects/${project._id}`)} // Navigate to project details
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>

                    {/* Project Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {project.title}
                    </Typography>
                  </Box>
                </Grid>
              ))
            ) : (
              <Typography
                variant="h6"
                sx={{
                  textAlign: 'center',
                  marginTop: 5,
                  color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
                }}
              >
                No projects available at the moment.
              </Typography>
            )}
          </Grid>
        )}

        {/* Load More Button */}
        {projects.length > displayedProjects && (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#603F83FF', color: 'white' }}
              onClick={loadMoreProjects}
            >
              Load More
            </Button>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default Projects;
