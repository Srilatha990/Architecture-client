import React, { useEffect } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import framer-motion

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TermsOfService = () => {

  return (
    <Container maxWidth="lg" sx={{ marginTop: 6 }}>
      {/* Title Section with Animation */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Typography variant="h4" fontWeight={600} gutterBottom align="center">
          Terms of Service
        </Typography>
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Typography variant="body2" gutterBottom align="center">
          Last updated: November 2024
        </Typography>
      </motion.div>

      <Paper sx={{ padding: 4 }}>
        {/* Introduction Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Introduction
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Welcome to architecture. These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.
            </Typography>
          </section>
        </motion.div>

        {/* Use of Services Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Use of Services
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for ensuring that your use of our services does not infringe on any laws, regulations, or the rights of others.
            </Typography>
          </section>
        </motion.div>

        {/* Intellectual Property Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Intellectual Property
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              All content, software, and materials provided on our website are owned by architecture or its licensors and are protected by copyright and intellectual property laws. You are granted a limited, non-exclusive license to use the services for personal or internal business purposes.
            </Typography>
          </section>
        </motion.div>

        {/* Limitation of Liability Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Limitation of Liability
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              In no event will architecture be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability, in any case, shall be limited to the amount you paid for the service.
            </Typography>
          </section>
        </motion.div>

        {/* Termination Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Termination
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              We reserve the right to suspend or terminate your access to our services if you violate these Terms of Service or engage in unlawful conduct.
            </Typography>
          </section>
        </motion.div>

        {/* Changes to Terms Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Changes to Terms
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              We may update these Terms of Service periodically. Any changes will be posted on this page, and the revised date will be updated. Please check this page regularly to stay informed.
            </Typography>
          </section>
        </motion.div>

        {/* Contact Us Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Contact Us
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              If you have any questions about these Terms of Service, please contact us at: <a href="mailto:info@manmun.in">architecture.com</a>
            </Typography>
          </section>
        </motion.div>
      </Paper>
    </Container>
  );
};

export default TermsOfService;
