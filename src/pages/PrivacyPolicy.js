import React, { useEffect } from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // Import framer-motion

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PrivacyPolicy = () => {

  return (
    <Container maxWidth="lg" sx={{ marginTop: 6 }}>
      {/* Title Section with Animation */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Typography variant="h4" fontWeight={600} gutterBottom align="center">
          Privacy Policy
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
              Welcome to , your privacy is important to us. This Privacy Policy outlines the types of personal
              information we collect, how we use it, and the steps we take to protect your information.
            </Typography>
          </section>
        </motion.div>

        {/* Information We Collect Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Information We Collect
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              We collect the following types of information to provide and improve our services:
            </Typography>
            <ul>
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, etc.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies, etc.</li>
              <li><strong>Usage Data:</strong> How you interact with our website, pages viewed, etc.</li>
            </ul>
          </section>
        </motion.div>

        {/* How We Use Your Information Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              How We Use Your Information
            </Typography>
            <ul>
              <li>To provide and improve our services</li>
              <li>To respond to inquiries and provide customer support</li>
              <li>To analyze usage patterns and improve the user experience</li>
              <li>To send newsletters and promotional communications (with your consent)</li>
            </ul>
          </section>
        </motion.div>

        {/* Data Security Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Data Security
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              We take appropriate security measures to protect your personal information. However, no method of data transmission
              over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
              means to protect your information, we cannot guarantee absolute security.
            </Typography>
          </section>
        </motion.div>

        {/* Your Rights Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Your Rights
            </Typography>
            <ul>
              <li>The right to access the information we hold about you</li>
              <li>The right to correct or update your personal information</li>
              <li>The right to request the deletion of your personal data</li>
              <li>The right to withdraw consent at any time (if processing is based on consent)</li>
            </ul>
          </section>
        </motion.div>

        {/* Changes to This Policy Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Changes to This Policy
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date. Please check this page regularly for any updates.
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
              If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:info@manmun.in">architecture.com</a>
            </Typography>
          </section>
        </motion.div>
      </Paper>
    </Container>
  );
};

export default PrivacyPolicy;
