import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import axios from 'axios';

function ProjectDetails() {
  const { id } = useParams(); // Get the project ID from the URL
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`https://architecture-server.vercel.app/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={80} />
      </Box>
    );
  }

  if (!project) {
    return (
      <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
        Project not found.
      </Typography>
    );
  }

  return (
    <div>
      {/* Background Image with Title */}
      <Box
        sx={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          {project.title}
        </Typography>
      </Box>

      {/* Project Description Section */}
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Description
        </Typography>
        <Typography variant="body1">{project.description}</Typography>
      </Container>
    </div>
  );
}

export default ProjectDetails;
