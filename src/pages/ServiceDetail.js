import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, CircularProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ServiceDetails = () => {
  const { id } = useParams();  // Get the service ID from the URL
  const navigate = useNavigate();  // Hook for navigation

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`https://moksto-server.vercel.app/api/services/${id}`);
        setService(response.data);
      } catch (error) {
        console.error('Error fetching service details', error);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  // Function to handle "Back to Services" button click
  const handleBackToServices = () => {
    navigate('/services');  // Navigates to the services page
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
        <CircularProgress size={80} sx={{ color: '#603F83FF' }} />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        {service?.name}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        {service?.description}
      </Typography>
      <Button
        variant="contained"
        color="#388E3C"
        onClick={handleBackToServices}
        sx={{ marginTop: 3, backgroundColor : '#603F83FF', color : 'white' }}
      >
        Back to Services
      </Button>
    </Container>
  );
};

export default ServiceDetails;
