

// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";

// function AboutUsSection() {
//   return (
//     <div style={{ padding: "60px 0", backgroundColor: "#f8f9fa", marginTop: "100px" }}>
//       <Container fluid={true}> {/* Full-width container */}
//         <Row>
//           {/* Left Section for Image */}
//           <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
//             <img
//               src="/images/about-img1.jpg" // Replace with your image path
//               alt="About Us"
//               style={{
//                 maxWidth: "90%", // Reduced width
//                 height: "auto",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//               }}
//             />
//           </Col>

//           {/* Right Section for Content */}
//           <Col xs={12} md={6} style={{ paddingLeft: "40px" }}>
//             <h6
//               style={{
//                 textTransform: "uppercase",
//                 fontSize: "0.9rem",
//                 color: "#7f8c8d",
//                 marginBottom: "10px",
//                 letterSpacing: "1px",
//               }}
//             >
//               About Us
//             </h6>
//             <h2
//               style={{
//                 fontSize: "2.5rem",
//                 fontWeight: "bold",
//                 color: "#2c3e50",
//                 marginBottom: "20px",
//               }}
//             >
//               Innovating The Future Of Architecture
//             </h2>
//             <p style={{ color: "#7f8c8d", fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "15px" }}>
//               We are a leading architecture company dedicated to designing iconic and sustainable spaces.
//               Our work combines creativity with functionality, ensuring every project reflects the uniqueness
//               of our clients' vision. We strive to exceed expectations by delivering solutions tailored to modern needs.
//             </p>
//             <p style={{ color: "#7f8c8d", fontSize: "1.1rem", lineHeight: "1.8" }}>
//               With decades of experience in the industry, we specialize in innovative designs that inspire.
//               Our team works closely with clients to bring their ideas to life, pushing the boundaries of design
//               and redefining architectural possibilities. Our projects stand as a testament to our commitment to excellence.
//             </p>
//             <Button
//               href="/contact" // Button to redirect to contact page
//               variant="primary"
//               style={{
//                 padding: "10px 20px",
//                 fontSize: "1.1rem",
//                 backgroundColor: "#603F83FF",
//                 borderColor: "#603F83FF",
//                 borderRadius: "5px",
//               }}
//             >
//               Get In Touch
//             </Button>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default AboutUsSection;



import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";

function AboutUsSection() {
  return (
    <div
      style={{
        padding: "60px 0",
        backgroundColor: "#f8f9fa",
        marginTop: "100px",
      }}
    >
      <Container maxWidth="lg"> {/* Equivalent of fluid container in MUI */}
        <Grid container spacing={4}>
          {/* Left Section for Image */}
          <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
            <img
              src="/images/about-img1.jpg" // Replace with your image path
              alt="About Us"
              style={{
                maxWidth: "90%", // Reduced width
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>

          {/* Right Section for Content */}
          <Grid item xs={12} md={6} style={{ paddingLeft: "40px" }}>
            <Typography
              variant="subtitle2"
              style={{
                textTransform: "uppercase",
                fontSize: "0.9rem",
                color: "#7f8c8d",
                marginBottom: "10px",
                letterSpacing: "1px",
              }}
            >
              About Us
            </Typography>
            <Typography
              variant="h4"
              style={{
                fontWeight: "bold",
                color: "#2c3e50",
                marginBottom: "20px",
              }}
            >
              Innovating The Future Of Architecture
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "#7f8c8d",
                fontSize: "1.1rem",
                lineHeight: "1.8",
                marginBottom: "15px",
              }}
            >
              We are a leading architecture company dedicated to designing iconic and sustainable spaces.
              Our work combines creativity with functionality, ensuring every project reflects the uniqueness
              of our clients' vision. We strive to exceed expectations by delivering solutions tailored to modern needs.
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "#7f8c8d",
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              With decades of experience in the industry, we specialize in innovative designs that inspire.
              Our team works closely with clients to bring their ideas to life, pushing the boundaries of design
              and redefining architectural possibilities. Our projects stand as a testament to our commitment to excellence.
            </Typography>
            <Button
              href="/contact" // Button to redirect to contact page
              variant="contained"
              style={{
                padding: "10px 20px",
                fontSize: "1.1rem",
                backgroundColor: "#603F83FF",
                borderColor: "#603F83FF",
                borderRadius: "5px",
                marginTop: "20px",
              }}
            >
              Get In Touch
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutUsSection;
