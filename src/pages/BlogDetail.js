import React, { useEffect, useState } from 'react';
import { Container, Typography, Paper, Box, Button, Avatar } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import blogAvatar from '../images/user.png'

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://architecture-server.vercel.app/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching the blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
  }

  const getFakeAvatar = () => {
    const name = blog.author || 'Anonymous';
    const firstLetter = name.charAt(0).toUpperCase();
    return `${blogAvatar}`;
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 4, overflow: 'hidden' }}>
        <Typography variant="h4" gutterBottom>{blog.title}</Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
          {blog.image ? (
            <Avatar src={blog.image} alt={blog.title} sx={{ width: 150, height: 150 }} />
          ) : (
            <Avatar src={getFakeAvatar()} alt="Fake Avatar" sx={{ width: 150, height: 150 }} />
          )}
        </Box>

        <Typography 
          variant="body1" 
          sx={{
            marginBottom: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis', 
            whiteSpace: 'pre-wrap', 
            wordBreak: 'break-word', 
          }}
        >
          {blog.content}
        </Typography>

        <Typography variant="caption" sx={{ display: 'block', marginBottom: 2 }}>
          Category: {blog.category}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" sx={{ backgroundColor: '#603F83FF', color: 'white' }} onClick={() => navigate('/blogs')}>
            Back to Blogs
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default BlogDetail;
