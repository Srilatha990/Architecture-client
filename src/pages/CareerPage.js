import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Modal,
  Box,
  TextField,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/system';
import { useLocation } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles'; // Import to get the theme for dark mode handling

const FormContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper, // Dynamically update based on theme
  padding: theme.spacing(3),
  borderRadius: '8px',
  boxShadow: 24,
  width: '90%',
  maxWidth: '500px',
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    maxWidth: '100%',
    padding: theme.spacing(2),
  },
}));

const CareerPage = () => {
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    jobTitle: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [uploading, setUploading] = useState(false);
  const theme = useTheme(); // Access the current theme

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.pdf,.doc,.docx',
    onDrop: (acceptedFiles) => {
      handleUpload(acceptedFiles[0]);
    },
  });

  useEffect(() => {
    axios
      .get('https://moksto-server.vercel.app/api/jobs')
      .then((response) => {
        setJobs(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching jobs:', error);
        toast.error('Error fetching job listings. Please try again.');
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = async (file) => {
    setUploading(true);

    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'moksha_IT'); // Ensure this preset allows raw file uploads

    try {
      const cloudinaryResponse = await axios.post(
        'https://api.cloudinary.com/v1_1/dsnhqqvdr/raw/upload',
        form
      );

      if (cloudinaryResponse.status !== 200) {
        throw new Error('Failed to upload to Cloudinary');
      }

      const resumeUrl = cloudinaryResponse.data.secure_url;
      const publicId = cloudinaryResponse.data.public_id;

      const applicationData = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        jobId: selectedJob._id,
        jobTitle: selectedJob.title,
        resumeUrl,
        resumePublicId: publicId,
      };

      const response = await axios.post('https://moksto-server.vercel.app/api/apply', applicationData);
      toast.success('Your application has been submitted successfully!');
      setOpen(false);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        jobTitle: '',
      });
    } catch (error) {
      console.error('Error uploading file or submitting application:', error);
      setErrorMessage('Failed to submit application. Please try again.');
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.mobile) {
      setErrorMessage('Please fill in all required fields.');
      toast.error('Please fill in all required fields.');
      return;
    }

    setErrorMessage('');
  };

  return (
    <Box sx={{ p: 2, mt: 4, backgroundColor: theme.palette.background.default }}>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <CircularProgress size={60} sx={{ color: '#003135' }} />
        </motion.div>
      ) : jobs.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
          }}
        >
          <Typography variant="h5" color="textSecondary">
            No jobs available at the moment.
          </Typography>
        </motion.div>
      ) : (
        <>
          <Toaster position="top-center" reverseOrder={false} />
          <Typography
            variant="h4"
            align="center"
            sx={{
              mb: 3,
              fontWeight: 'bold',
              color: theme.palette.text.primary, // Dynamically adjust text color based on theme
              fontSize: '2.25rem',
            }}
          >
            Job Openings
          </Typography>

          <Grid container spacing={2}>
            {jobs.map((job, index) => (
             <Grid item xs={12} sm={6} md={4} key={job._id}>
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.3 }}
             >
               <Card
                 sx={{
                   height: '400px',
                   display: 'flex',
                   flexDirection: 'column',
                   maxWidth: '350px', // Added maxWidth for larger screens
                   margin: 'auto', // Centers the card
                 }}
               >
                 <CardContent sx={{ textAlign: 'center', padding: '16px', flex: 1, overflow: 'auto' }}>
                   <Typography
                     variant="h6"
                     gutterBottom
                     sx={{
                       fontWeight: 'bold',
                       color: '#000000',
                       lineHeight: '1.6',
                       wordBreak: 'break-word',
                       paddingRight: '10px',
                       '@media (max-width: 600px)': {
                         fontSize: '1.4rem',
                       },
                     }}
                   >
                     {job.title}
                   </Typography>
                   <Typography
                     variant="body1"
                     color="textSecondary"
                     sx={{
                       lineHeight: '1.6',
                       wordBreak: 'break-word',
                       whiteSpace: 'normal',
                       fontSize: '1.2rem',
                       fontWeight: 'normal',
                     }}
                   >
                     {job.jobType}
                   </Typography>
                   <Typography
                     variant="body2"
                     color="textSecondary"
                     sx={{
                       lineHeight: '1.8',
                       wordBreak: 'break-word',
                       whiteSpace: 'normal',
                       fontSize: '1.2rem',
                     }}
                   >
                     Location: {job.location}
                   </Typography>
                   <Typography
                     variant="body2"
                     color="textSecondary"
                     sx={{
                       lineHeight: '1.8',
                       wordBreak: 'break-word',
                       whiteSpace: 'normal',
                       fontSize: '1rem',
                       fontWeight: 'normal',
                     }}
                   >
                     {job.description}
                   </Typography>
                 </CardContent>
           
                 <Button
                   variant="contained"
                   fullWidth
                   sx={{ backgroundColor: 'primary' }}
                   onClick={() => {
                     setSelectedJob(job);
                     setFormData({ ...formData, jobTitle: job.title });
                     handleOpen();
                   }}
                   whileHover={{ scale: 1.05 }}
                 >
                   Apply Now
                 </Button>
               </Card>
             </motion.div>
           </Grid>
           
            ))}
          </Grid>
        </>
      )}

      <Modal open={open} onClose={handleClose}>
        <FormContainer>
          <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 'bold', color: theme.palette.text.primary }}>
            Apply for Job
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              fullWidth
              required
              value={formData.name}
              name="name"
              onChange={handleInputChange}
              sx={{ mb: 2 }}
              InputLabelProps={{
                style: { color: theme.palette.text.primary }, // Adjust text color for labels
              }}
              InputProps={{
                style: { color: theme.palette.text.primary }, // Adjust text color inside input fields
              }}
            />
            <TextField
              label="Email Address"
              fullWidth
              required
              value={formData.email}
              name="email"
              onChange={handleInputChange}
              sx={{ mb: 2 }}
              InputLabelProps={{
                style: { color: theme.palette.text.primary },
              }}
              InputProps={{
                style: { color: theme.palette.text.primary },
              }}
            />
            <TextField
              label="Mobile Number"
              fullWidth
              required
              value={formData.mobile}
              name="mobile"
              onChange={handleInputChange}
              sx={{ mb: 2 }}
              InputLabelProps={{
                style: { color: theme.palette.text.primary },
              }}
              InputProps={{
                style: { color: theme.palette.text.primary },
              }}
            />

            <div
              {...getRootProps()}
              style={{
                border: '2px dashed #003135',
                padding: '20px',
                marginBottom: '16px',
                color: theme.palette.text.primary, // Adjust text color inside the file upload area
              }}
            >
              <input {...getInputProps()} />
              <p>Drag & drop a file, or click to select a file</p>
            </div>

            {errorMessage && <Typography color="error">{errorMessage}</Typography>}

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              {uploading ? 'Uploading...' : 'Submit Application'}
            </Button>
          </form>
        </FormContainer>
      </Modal>
    </Box>
  );
};

export default CareerPage;
