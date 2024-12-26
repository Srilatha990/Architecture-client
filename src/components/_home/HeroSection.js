



// import React, { useState, useEffect } from "react";
// import { Box, Typography, Button } from "@mui/material";
// import SwipeableViews from "react-swipeable-views"; // You can install this package if needed

// function HeroSection() {
//   const videos = [
//     {
//       url: "/videos/video9.mp4",
//       alt: "Slide 1",
//       subtitle: "CREATING ICONIC SPACES",
//       title: "Where Design Meets Innovation",
//     },
//     {
//       url: "/videos/video5.mp4",
//       alt: "Slide 2",
//       subtitle: "TRANSFORMING ARCHITECTURE",
//       title: "Innovative Solutions for Your Spaces",
//     },
//     {
//       url: "/videos/video7.mp4",
//       alt: "Slide 3",
//       subtitle: "DESIGNING THE FUTURE",
//       title: "Shaping the Future of Architecture",
//     },
//     {
//       url: "/videos/video6.mp4",
//       alt: "Slide 4",
//       subtitle: "EMPOWERING SUCCESS",
//       title: "Empowering Your Success with Technology",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0); // To control carousel index

//   // Change slide every 3 seconds (1000ms interval)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval); // Cleanup interval on component unmount
//   }, []);

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100vw",
//         height: "100vh",
//         overflow: "hidden",
//         margin: "0",
//         padding: "0",
//       }}
//     >
//       {/* Swipeable Views for carousel */}
//       <SwipeableViews index={activeIndex} onChangeIndex={setActiveIndex}>
//         {videos.map((slide, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: "relative",
//               width: "100%",
//               height: "100vh",
//               overflow: "hidden",
//             }}
//           >
//             {/* Video background */}
//             <video
//               src={slide.url}
//               autoPlay
//               loop
//               muted
//               style={{
//                 position: "absolute",
//                 top: "0",
//                 left: "0",
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//               }}
//               alt={slide.alt}
//             />

//             {/* Text Content - Hidden on small screens */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 width: "80%", // Maintain consistent width to cover watermark
//                 maxWidth: "800px", // Limit maximum width for larger screens
//                 padding: "20px 40px",
//                 backgroundColor: "rgba(211, 211, 211, 0.9)",
//                 borderRadius: "10px",
//                 textAlign: "center",
//                 display: { xs: "none", md: "flex" }, // Hide on small screens
//               }}
//             >
//               <div>
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontSize: "1.2rem",
//                     fontWeight: { xs: "500", sm: "bold" },
//                     color: "#fff",
//                     textTransform: "uppercase",
//                     marginBottom: "10px",
//                   }}
//                 >
//                   {slide.subtitle}
//                 </Typography>
//                 <Typography
//                   variant="h3"
//                   sx={{
//                     fontSize: "2rem",
//                     fontWeight: { xs: "600", sm: "700" },
//                     color: "#fff",
//                     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
//                   }}
//                 >
//                   {slide.title}
//                 </Typography>
//               </div>
//             </Box>
//           </Box>
//         ))}
//       </SwipeableViews>
//     </Box>
//   );
// }

// export default HeroSection;



import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views"; // You can install this package if needed

function HeroSection() {
  const videos = [
    {
      url: "/videos/video9.mp4",
      alt: "Slide 1",
      subtitle: "CREATING ICONIC SPACES",
      title: "Where Design Meets Innovation",
    },
    {
      url: "/videos/video5.mp4",
      alt: "Slide 2",
      subtitle: "TRANSFORMING ARCHITECTURE",
      title: "Innovative Solutions for Your Spaces",
    },
    {
      url: "/videos/video7.mp4",
      alt: "Slide 3",
      subtitle: "DESIGNING THE FUTURE",
      title: "Shaping the Future of Architecture",
    },
    {
      url: "/videos/video6.mp4",
      alt: "Slide 4",
      subtitle: "EMPOWERING SUCCESS",
      title: "Empowering Your Success with Technology",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0); // To control carousel index

  // Change slide every 3 seconds (1000ms interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: "0",
        padding: "0",
      }}
    >
      {/* Swipeable Views for carousel */}
      <SwipeableViews index={activeIndex} onChangeIndex={setActiveIndex}>
        {videos.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            {/* Video background */}
            <video
              src={slide.url}
              autoPlay
              loop
              muted
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              alt={slide.alt}
            />

            {/* Text Content */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%", // Maintain consistent width to cover watermark
                maxWidth: "800px", // Limit maximum width for larger screens
                padding: "20px 40px",
                backgroundColor: "rgba(211, 211, 211, 0.9)",
                borderRadius: "10px",
                textAlign: "center",
                display: "flex", // Ensure it's always displayed on all screens
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "1rem", sm: "1.2rem" }, // Smaller font size on xs
                  fontWeight: { xs: "500", sm: "bold" },
                  color: "#fff",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                {slide.subtitle}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem" }, // Adjust font size for small screens
                  fontWeight: { xs: "600", sm: "700" },
                  color: "#fff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                {slide.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </SwipeableViews>
    </Box>
  );
}

export default HeroSection;
