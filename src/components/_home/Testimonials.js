

// import React from 'react';
// import { Box, Typography, Container, Card, Avatar } from '@mui/material';
// import Slider from 'react-slick';
// import { useTheme } from '@mui/material/styles';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Testimonials = () => {
//   const theme = useTheme();

//   // Sample testimonials data
//   const testimonials = [
//     {
//       name: 'John Doe',
//       image: '/images/client1.jpg',
//       text: 'This service was fantastic! I highly recommend it to anyone looking to improve their workflow and efficiency.',
//     },
//     {
//       name: 'Jane Smith',
//       image: '/images/client2.jpg',
//       text: 'Amazing experience! The team was incredibly supportive and provided exceptional value.',
//     },
//     {
//       name: 'Alice Johnson',
//       image: '/images/client3.jpg',
//       text: 'I am so impressed with the quality of work delivered. They truly exceeded my expectations.',
//     },
//     {
//       name: 'Mark Wilson',
//       image: '/images/client4.jpg',
//       text: 'Great attention to detail and fantastic customer service. Highly recommend them!',
//     },
//     {
//       name: 'Emma Brown',
//       image: '/images/client5.jpg',
//       text: 'The team was professional, efficient, and a pleasure to work with. Couldn’t ask for more!',
//     },
//     {
//       name: 'Liam Davis',
//       image: '/images/client6.jpg',
//       text: 'Outstanding support and exceptional results. This team really knows what they’re doing!',
//     },
//   ];

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     autoplay: true,
//     autoplaySpeed: 5000,
//   };

//   return (
//     <Container maxWidth="1500px" sx={{ marginTop: 15 }}>
//       <Typography
//         variant="h4"
//         gutterBottom
//         sx={{
//           textAlign: 'center',
//           fontWeight: 'bold',
//           marginBottom: 4,
//           color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
//         }}
//       >
//         Client Testimonials
//       </Typography>
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <Box key={index} sx={{ padding: 2 }}>
//             <Card
//               elevation={3}
//               sx={{
//                 padding: 3,
//                 textAlign: 'center',
//                 height: '300px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
//                 color: theme.palette.mode === 'dark' ? '#F1F1F1' : '#333',
//               }}
//             >
//               <Avatar
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 sx={{
//                   width: 80,
//                   height: 80,
//                   marginBottom: 2,
//                 }}
//               />
//               <Typography
//                 variant="body1"
//                 sx={{
//                   fontStyle: 'italic',
//                   marginBottom: 2,
//                   color: theme.palette.mode === 'dark' ? '#B0B0B0' : '#555',
//                 }}
//               >
//                 "{testimonial.text}"
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{ fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#F1F1F1' : '#333' }}
//               >
//                 {testimonial.name}
//               </Typography>
//             </Card>
//           </Box>
//         ))}
//       </Slider>
//     </Container>
//   );
// };

// export default Testimonials;







import React from 'react';
import { Box, Typography, Container, Card, Avatar } from '@mui/material';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
  const theme = useTheme();

  // Sample testimonials data
  const testimonials = [
    {
      name: 'John Doe',
      image: '/images/client1.jpg',
      text: 'This service was fantastic! I highly recommend it to anyone looking to improve their workflow and efficiency.',
    },
    {
      name: 'Jane Smith',
      image: '/images/client2.jpg',
      text: 'Amazing experience! The team was incredibly supportive and provided exceptional value.',
    },
    {
      name: 'Alice Johnson',
      image: '/images/client3.jpg',
      text: 'I am so impressed with the quality of work delivered. They truly exceeded my expectations.',
    },
    {
      name: 'Mark Wilson',
      image: '/images/client4.jpg',
      text: 'Great attention to detail and fantastic customer service. Highly recommend them!',
    },
    {
      name: 'Emma Brown',
      image: '/images/client5.jpg',
      text: 'The team was professional, efficient, and a pleasure to work with. Couldn’t ask for more!',
    },
    {
      name: 'Liam Davis',
      image: '/images/client6.jpg',
      text: 'Outstanding support and exceptional results. This team really knows what they’re doing!',
    },
  ];

  // Slider settings with responsive options
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToScroll: 1, // Scroll 1 slide at a time
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   slidesToShow: 1, // Default to show 1 slide on small screens
  //   responsive: [
  //     {
  //       breakpoint: 600, // For mobile and small tablets
  //       settings: {
  //         slidesToShow: 1, // Show only 1 card per slide on mobile
  //       },
  //     },
  //     {
  //       breakpoint: 1024, // For tablets and larger screens
  //       settings: {
  //         slidesToShow: 3, // Show 3 cards per slide on medium and larger screens
  //       },
  //     },
  //   ],
  // };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1, // Default to show 1 slide on small screens
    responsive: [
      {
        breakpoint: 600, // For mobile and small tablets
        settings: {
          slidesToShow: 1, // Show only 1 card per slide on mobile
        },
      },
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3, // Show 3 cards per slide on tablets and larger screens
        },
      },
      {
        breakpoint: 1440, // For desktops (or you can adjust this number based on your preference)
        settings: {
          slidesToShow: 3, // Show 3 cards per slide on desktop screens
        },
      },
    ],
  };
  
  return (
    <Container maxWidth="1500px" sx={{ marginTop: 15 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: 4,
          color: theme.palette.mode === 'dark' ? '#F1F1F1' : 'black',
        }}
      >
        Client Testimonials
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <Card
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                height: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
                color: theme.palette.mode === 'dark' ? '#F1F1F1' : '#333',
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: 80,
                  height: 80,
                  marginBottom: 2,
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontStyle: 'italic',
                  marginBottom: 2,
                  color: theme.palette.mode === 'dark' ? '#B0B0B0' : '#555',
                }}
              >
                "{testimonial.text}"
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#F1F1F1' : '#333' }}
              >
                {testimonial.name}
              </Typography>
            </Card>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};

export default Testimonials;
