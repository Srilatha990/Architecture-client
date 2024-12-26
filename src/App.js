import React, { useState, useMemo } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';
import Blogs from './pages/Blog';
import NotFound from './pages/NotFound'; 
import PrivacyPolicy from './pages/PrivacyPolicy';  
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import Footer from './pages/Footer';
import ServiceDetail from './pages/ServiceDetail';
import ScrollToTop from './components/ScrollToTop';
import ProjectCardsComponent from './pages/Projects';
import ProjectDetails from './pages/ProjectDetailsPage'
import FAQ from './pages/FaqPage';
import SignupForm from './pages/RegisterPage';
import LoginForm from './pages/LoginPage';
import VerifyOtp from './pages/VerifyOtp';
import AccountPage from './pages/UserAccount';





const App = () => {
  const [themeMode, setThemeMode] = useState('light'); // Theme state (light/dark)

  // Create the theme based on the mode (Royal Purple and Ice Flow colors)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: '#603F83FF', // Royal Purple
          },
          secondary: {
            main: '#C7D3D4FF', // Ice Flow
          },
          background: {
            default: themeMode === 'dark' ? '#121212' : '#FFFFFF', // Dark background for dark mode, light for light mode
            paper: themeMode === 'dark' ? '#1F1F1F' : '#FFFFFF', // Dark paper background for dark mode
          },
          text: {
            primary: themeMode === 'light' ? '#333333' : '#EDE8F5', // Text color based on theme
            secondary: '#C4C4C4', // Secondary text color
          },
        },
        typography: {
          fontFamily: '"Roboto", sans-serif', // Font for the application
        },
      }),
    [themeMode]
  );

  return (
 <>
 <ScrollToTop/>
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Navbar themeMode={themeMode} setThemeMode={setThemeMode} /> {/* Navbar with theme toggle */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<SignupForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/otp' element={<VerifyOtp/>}/>
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/projects" element={<ProjectCardsComponent/>} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/faqs' element={<FAQ/>}/>
          {/* <Route path="/careers" element={<CareerPage />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
          <Route path='/account' element={<AccountPage/>}/>
          
        </Routes>
        <Footer />
    </ThemeProvider>
 </>
  );
};

export default App;
