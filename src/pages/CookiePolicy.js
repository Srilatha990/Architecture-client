import React, { useEffect } from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion'; // Import framer-motion

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CookiePolicy = () => {
  useEffect(() => {
    // Any additional setup can be added here
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginTop: 6 }}>
      {/* Page Title with Fade-in Animation */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Typography variant="h4" fontWeight={600} gutterBottom align="center">
          Cookie Policy
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
              This Cookie Policy explains how architecture uses cookies and similar technologies to enhance your experience
              when visiting our website. By using our website, you consent to the use of cookies in accordance with this policy.
            </Typography>
          </section>
        </motion.div>

        {/* What Are Cookies Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              What Are Cookies?
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              Cookies are small text files stored on your device that help us collect and store information about your usage
              of our website, such as preferences and browsing habits.
            </Typography>
          </section>
        </motion.div>

        {/* Types of Cookies We Use Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Types of Cookies We Use
            </Typography>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for the operation of our website and services.</li>
              <li><strong>Performance Cookies:</strong> Collect data on how you use our website to improve our services.</li>
              <li><strong>Functional Cookies:</strong> Help us remember your preferences and enhance your user experience.</li>
              <li><strong>Advertising Cookies:</strong> Used to display relevant ads and track the effectiveness of our marketing campaigns.</li>
            </ul>
          </section>
        </motion.div>

        {/* Managing Cookies Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Managing Cookies
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              You can manage cookies through your browser settings. Most browsers allow you to block or delete cookies, but doing
              so may affect the functionality of certain parts of our website.
            </Typography>
          </section>
        </motion.div>

        {/* Changes to This Policy Section with Fade-in Animation */}
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <section>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 3 }}>
              Changes to This Policy
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page, and the updated date
              will be revised. Please check this page regularly for updates.
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
              If you have any questions regarding this Cookie Policy, please contact us at: <a href="mailto:info@manmun.in">architecture</a>
            </Typography>
          </section>
        </motion.div>
      </Paper>
    </Container>
  );
};

export default CookiePolicy;
