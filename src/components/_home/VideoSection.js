import React from 'react';
import { Box, Typography } from '@mui/material';

function VideoSection() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h5" gutterBottom>
        Welcome to Our Software Solutions
      </Typography>
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/Qa_4c9zrxf0?si=Ld5VrfNzkXTy_Zkz"  // Your provided video URL
        title="Software Company Introduction"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ borderRadius: '8px' }}
      />
    </Box>
  );
}

export default VideoSection;
