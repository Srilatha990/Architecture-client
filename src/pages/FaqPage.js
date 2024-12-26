

import React, { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const base_URL = 'https://architecture-backend-five.vercel.app';

  // Fetch FAQ data from API
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(`${base_URL}/api/faqs`);
        const data = await response.json();
        setFaqs(data); // Assuming data is an array of FAQ objects
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) {
    return (
      <center style={{ fontWeight: 'bold', fontSize: '20px' }}>
        <Typography>Loading FAQs...</Typography>
      </center>
    );
  }

  return (
    <div>
      {/* Part 1: Banner Section */}
      <Box
        sx={{
          height: { xs: '200px', sm: '250px', md: '300px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/images/service-page-img.jpg"
          alt="FAQ Background"
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
          Frequently Asked Questions
        </Typography>
      </Box>

      {/* Part 2: FAQ Section */}
      <Box
        sx={{
          maxWidth: '900px',
          margin: '20px auto',
          padding: '0 20px',
        }}
      >
        {faqs.length > 0 ? (
          faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                marginBottom: '10px',
                overflow: 'hidden',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  backgroundColor: '#f7f7f7',
                  '&:hover': { backgroundColor: '#f0f0f0' },
                }}
              >
                <Typography sx={{ fontWeight: 'bold' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ backgroundColor: '#fafafa' }}>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Typography>No FAQs available.</Typography>
        )}
      </Box>
    </div>
  );
};

export default FAQ;
