// import React from 'react';
// import { Box, Typography, Button, Container } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import { motion } from 'framer-motion';

// const CTASection = () => {
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         backgroundImage: 'url(/images/cta-img.jpg)', // Public folder image path
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh',
//         marginTop: 15,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: '#fff',
//       }}
//     >
//       <Box
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.3)',
//           zIndex: 1,
//         }}
//       />
//       <Container
//         sx={{
//           position: 'relative',
//           zIndex: 2,
//           textAlign: 'center',
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <Typography
//             variant="h3"
//             gutterBottom
//             sx={{
//               fontWeight: 'bold',
//               marginBottom: 4,
//               color: '#fff',
//               fontSize: { xs: '2rem', md: '3rem' },
//             }}
//           >
//             Transform Your Space with Innovative Designs
//           </Typography>
//           <Typography
//             variant="h6"
//             gutterBottom
//             sx={{
//               color: '#ddd',
//               marginBottom: 4,
//               fontSize: { xs: '1rem', md: '1.25rem' },
//             }}
//           >
//             Let us help you bring your architectural vision to life with exceptional expertise and creativity.
//           </Typography>
//           <Box
//             sx={{
//               display: 'flex',
//               justifyContent: 'center',
//               gap: 2,
//               flexWrap: 'wrap',
//             }}
//           >
//             <Button
//               variant="contained"
//               sx={{
//                 backgroundColor: theme.palette.primary.main,
//                 color: '#fff',
//                 fontWeight: 'bold',
//                 padding: '12px 24px',
//                 fontSize: '16px',
//                 borderRadius: '25px',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   backgroundColor: theme.palette.primary.dark,
//                   transform: 'scale(1.1)',
//                 },
//               }}
//             >
//               Get Started
//             </Button>
//             <Button
//               variant="outlined"
//               sx={{
//                 borderColor: '#fff',
//                 color: '#fff',
//                 fontWeight: 'bold',
//                 padding: '12px 24px',
//                 fontSize: '16px',
//                 borderRadius: '25px',
//                 transition: 'all 0.3s ease',
//                 '&:hover': {
//                   backgroundColor: '#fff',
//                   color: theme.palette.primary.main,
//                   transform: 'scale(1.1)',
//                 },
//               }}
//             >
//               Learn More
//             </Button>
//           </Box>
//         </motion.div>
//       </Container>
//     </Box>
//   );
// };

// export default CTASection;


import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for routing

const CTASection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url(/images/cta-img.jpg)', // Public folder image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        marginTop: 15,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1,
        }}
      />
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              marginBottom: 4,
              color: '#fff',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Transform Your Space with Innovative Designs
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: '#ddd',
              marginBottom: 4,
              fontSize: { xs: '1rem', md: '1.25rem' },
            }}
          >
            Let us help you bring your architectural vision to life with exceptional expertise and creativity.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="contained"
              component={RouterLink} // Use RouterLink for routing
              to="/contact" // Route to the contact page
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: '#fff',
                fontWeight: 'bold',
                padding: '12px 24px',
                fontSize: '16px',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'scale(1.1)',
                },
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              component={RouterLink} // Use RouterLink for routing
              to="/aboutus" // Route to the about page
              sx={{
                borderColor: '#fff',
                color: '#fff',
                fontWeight: 'bold',
                padding: '12px 24px',
                fontSize: '16px',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#fff',
                  color: theme.palette.primary.main,
                  transform: 'scale(1.1)',
                },
              }}
            >
              Learn More
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CTASection;
