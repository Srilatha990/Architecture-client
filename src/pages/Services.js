// ;



// import React, { useEffect, useState } from 'react';
// import { Container, Typography, Grid, Paper, Box, CircularProgress } from '@mui/material';
// import axios from 'axios';
// import { Link as RouterLink } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';
// import { motion } from 'framer-motion';

// function Services() {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const theme = useTheme();

//   useEffect(() => {
//     const fetchServices = async () => {
//       try {
//         const response = await axios.get('https://architecture-backend-five.vercel.app/api/services');
//         setServices(response.data);
//       } catch (error) {
//         console.error('Error fetching services', error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchServices();
//   }, []);

//   return (
//     <div>
//       {/* Section 1: Background Image with Heading */}
//       <Box
//         sx={{
//           backgroundImage: `url('/images/service-page-img.jpg')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '60vh',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           textAlign: 'center',
//           color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'white',
//           textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
//         }}
//       >
//         <Typography variant="h5" sx={{ marginBottom: 2 }}>
//           WE PROPOSE
//         </Typography>
//         <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
//           Best Services
//         </Typography>
//       </Box>

//       {/* Section 2: Services Introduction */}
//       <Container maxWidth="lg" sx={{ marginTop: 6 }}>
//         <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
//           <Typography
//             variant="h6"
//             sx={{
//               color: theme.palette.mode === 'dark' ? '#A0A0A0' : '#603F83FF',
//               fontWeight: 'bold',
//               textTransform: 'uppercase',
//             }}
//           >
//             SERVICES
//           </Typography>
//           <Typography
//             variant="h4"
//             sx={{
//               fontWeight: 'bold',
//               marginBottom: 2,
//               color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
//             }}
//           >
//             This is what we do.
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{
//               color: theme.palette.mode === 'dark' ? '#C0C0C0' : '#777',
//             }}
//           >
//             Explore our range of services designed to help you achieve your goals.
//           </Typography>
//         </Box>

//         {/* Section 2: Services Cards */}
//         {loading ? (
//           <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
//             <CircularProgress size={80} sx={{ color: '#603F83FF' }} />
//           </Box>
//         ) : (
//           <Grid container spacing={4} justifyContent="center">
//             {services.length > 0 ? (
//               services.map((service) => (
//                 <Grid item xs={12} sm={6} md={4} key={service._id}>
//                   <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, ease: 'easeOut' }}
//                   >
//                     <Paper
//                       elevation={3}
//                       sx={{
//                         padding: '20px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         height: '320px',
//                         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                         backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
//                         color: theme.palette.mode === 'dark' ? '#F1F1F1' : '#333',
//                         '&:hover': {
//                           transform: 'scale(1.05)',
//                           boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//                           backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#f5f5f5',
//                         },
//                       }}
//                     >
//                       {/* Centered Icon */}
//                       {service.image && (
//                         <img
//                           src={service.image}
//                           alt={service.title}
//                           style={{
//                             width: '80px', // Increased width
//                             height: '80px', // Increased height
//                             marginBottom: '20px', // Adjusted spacing
//                           }}
//                         />
//                       )}

//                       {/* Service Title */}
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 'bold',
//                           marginBottom: '10px',
//                           textAlign: 'center',
//                           color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
//                         }}
//                       >
//                         {service.title}
//                       </Typography>

//                       {/* Service Description */}
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           textAlign: 'center',
//                           color: theme.palette.mode === 'dark' ? '#B0B0B0' : '#555',
//                         }}
//                       >
//                         {service.description}
//                       </Typography>
//                     </Paper>
//                   </motion.div>
//                 </Grid>
//               ))
//             ) : (
//               <Typography
//                 variant="h6"
//                 sx={{
//                   textAlign: 'center',
//                   marginTop: 5,
//                   color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
//                 }}
//               >
//                 No services available at the moment.
//               </Typography>
//             )}
//           </Grid>
//         )}
//       </Container>
//     </div>
//   );
// }

// export default Services;


import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Paper, Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://architecture-backend-five.vercel.app/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div>
      {/* Section 1: Background Image with Heading */}
      <Box
        sx={{
          backgroundImage: `url('/images/service-page-img.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'white',
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          WE PROPOSE
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
          Best Services
        </Typography>
      </Box>

      {/* Section 2: Services Introduction */}
      <Container maxWidth="lg" sx={{ marginTop: 6 }}>
        <Box sx={{ textAlign: 'center', marginBottom: 6 }}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.mode === 'dark' ? '#A0A0A0' : '#603F83FF',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            }}
          >
            SERVICES
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              marginBottom: 2,
              color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
            }}
          >
            This is what we do.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.mode === 'dark' ? '#C0C0C0' : '#777',
            }}
          >
            Explore our range of services designed to help you achieve your goals.
          </Typography>
        </Box>

        {/* Section 2: Services Cards */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
            <CircularProgress size={80} sx={{ color: '#603F83FF' }} />
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {services.length > 0 ? (
              services.map((service) => (
                <Grid item xs={12} sm={6} md={4} key={service._id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        padding: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '320px',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
                        color: theme.palette.mode === 'dark' ? '#F1F1F1' : '#333',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                          backgroundColor: theme.palette.mode === 'dark' ? '#444' : '#f5f5f5',
                        },
                      }}
                    >
                      {/* Centered Icon */}
                      {service.image && (
                        <img
                          src={service.image}
                          alt={service.title}
                          style={{
                            width: '80px', // Increased width
                            height: '80px', // Increased height
                            marginBottom: '20px', // Adjusted spacing
                          }}
                        />
                      )}

                      {/* Service Title */}
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          marginBottom: '10px',
                          textAlign: 'center',
                          color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
                        }}
                      >
                        {service.title}
                      </Typography>

                      {/* Service Description */}
                      <Typography
                        variant="body1"
                        sx={{
                          textAlign: 'center',
                          color: theme.palette.mode === 'dark' ? '#B0B0B0' : '#555',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </Paper>
                  </motion.div>
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
                No services available at the moment.
              </Typography>
            )}
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default Services;
