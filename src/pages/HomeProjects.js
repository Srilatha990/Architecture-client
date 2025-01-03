



import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Box, CircularProgress, Button } from '@mui/material';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://architecture-server.vercel.app/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        marginTop: 6,
        width: '100%',
        paddingX: { xs: 2, sm: 4, md: 5 }, // Padding for responsiveness
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
        }}
      >
        Our Projects
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <CircularProgress size={80} sx={{ color: '#603F83FF' }} />
        </Box>
      ) : (
        <>
          <Grid container spacing={3}>
            {projects.slice(0, 6).map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project._id}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '380px',
                    minHeight: 380,
                    transition: 'all 0.3s ease',
                    backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
                    color: theme.palette.mode === 'dark' ? '#F1F1F1' : '#333',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                      backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#f5f5f5',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    {/* Display Image */}
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.name}
                        style={{
                          width: '100%', // Ensures image spans the width of its container
                          height: '200px', // Fixed height for all images
                          objectFit: 'cover', // Ensures the image fits within the container without distortion
                          borderRadius: '8px',
                        }}
                      />
                    )}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      // marginBottom: '15px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      display: 'block',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 2, // Limit text to 2 lines
                      // lineHeight: '1.6',
                      display: '-webkit-box',
                      color: theme.palette.mode === 'dark' ? '#B0B0B0' : '#555',
                    }}
                  >
                    {project.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <RouterLink to="/projects" style={{ textDecoration: 'none' }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#603F83FF',
                  color: '#fff',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#502c6b' },
                }}
              >
                View More
              </Button>
            </RouterLink>
          </Box>
        </>
      )}
    </Container>
  );
}

export default Projects;
