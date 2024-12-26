


import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
  Container,
  Box,
} from '@mui/material';
import { toast, Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailComRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
  const nameRegex = /^[A-Za-z\s]+$/;

  const validateForm = () => {
    if (!name.trim()) {
      toast.error('Name is required!');
      return false;
    }
    if (!nameRegex.test(name)) {
      toast.error('Name can only contain letters and spaces!');
      return false;
    }
    if (!email.trim()) {
      toast.error('Email is required!');
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email!');
      return false;
    }
    if (!emailComRegex.test(email)) {
      toast.error('Email must end with .com!');
      return false;
    }
    if (!message.trim()) {
      toast.error('Message is required!');
      return false;
    }
    if (message.length > 200) {
      toast.error('Message cannot exceed 200 characters!');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formData = { name, email, message };
    setLoading(true);

    try {
      const response = await fetch('https://moksto-server.vercel.app/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Your message has been sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast.error('Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div style={{ width: '100%' }}>
      <Container maxWidth="lg">
        {/* Part 1: Banner Section */}
        <Box
          sx={{
            height: { xs: '200px', sm: '300px', md: '400px' },
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            width: '100%',
          }}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <img
            src="/images/service-page-img.jpg"
            alt="Contact Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              color: '#fff',
              fontWeight: 'bold',
              textShadow: '2px 2px 5px rgba(0,0,0,0.5)',
            }}
          >
            Contact Us
          </Typography>
        </Box>

        {/* Part 2: Contact Form and Map Section */}
        <Box sx={{ padding: '0 5%' }}> {/* Add padding on the sides of the screen */}
          <Grid container spacing={2} sx={{ marginTop: 4 }}>
            {/* Left Section: Map */}
            <Grid item xs={12} sm={6}>
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Paper
                  sx={{
                    height: '400px', // Adjust height to match the form
                    width: '100%',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.21622390383!2d78.5534709!3d17.3533255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99005a6b6089%3A0x78a0bd01ec6960f2!2sTechno%20Tide%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1735040721289!5m2!1sen!2sin"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                  ></iframe>
                </Paper>
              </motion.div>
            </Grid>

            {/* Right Section: Contact Form */}
            <Grid item xs={12} sm={6}>
              <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                <Paper
                  sx={{
                    height: '400px', // Matches the map's height
                    width: '100%',
                    padding: 2,
                    backgroundColor: (theme) => theme.palette.background.paper,
                    boxSizing: 'border-box', // Ensure padding is considered in the width
                  }}
                >
                  <Typography variant="h6" sx={{ fontSize: '1.75rem', fontWeight: '600', textAlign: 'center' }}>
                    Contact Form
                  </Typography>
                  <form onSubmit={handleSubmit} style={{ height: '100%' }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      sx={{ marginBottom: 2 }}
                      color="primary"
                    />
                    <TextField
                      fullWidth
                      label="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      required
                      sx={{ marginBottom: 2 }}
                      color="primary"
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      multiline
                      rows={4}
                      required
                      sx={{ marginBottom: 2 }}
                      color="primary"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        backgroundColor: '#603F83FF', // Royal Purple
                        color: '#fff',
                        '&:hover': { backgroundColor: '#C7D3D4FF' },
                        padding: '10px 20px',
                        fontSize: '1rem',
                        borderRadius: '4px',
                        transition: 'background-color 0.3s ease',
                      }}
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Toaster position="top-center" reverseOrder={false} />
      </Container>
    </div>
  );
}

export default Contact;


