
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch categories from backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://architecture-server.vercel.app/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch blogs based on selected category
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const url = selectedCategory
          ? `https://architecture-server.vercel.app/api/blogs/category/${selectedCategory}`
          : 'https://architecture-server.vercel.app/api/blogs';
        const response = await axios.get(url);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Set selected category from dropdown
  };

  return (
    <div style={styles.blogsContainer}>
      {/* Background Image Section */}
      <header style={styles.headerSection}>
        <div style={styles.backgroundImage}></div>
      </header>

      {/* First Row: Blogs heading and category dropdown */}
      <div style={styles.firstRow}>
        <h1 style={styles.blogsHeading}>Blogs</h1>
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          style={styles.categoryDropdown}
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Second Row: Blog List */}
      <div style={styles.blogsBody}>
        <div style={styles.blogListSection}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog._id} style={styles.blogCard}>
                  <img src={blog.image} alt={blog.title} style={styles.blogImage} />
                  <h4 style={styles.blogTitle}>{blog.title}</h4>
                  <p style={styles.blogAuthor}><strong>Author:</strong> {blog.author}</p>
                </div>
              ))
            ) : (
              <p>No blogs found in this category.</p>
            )
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  blogsContainer: {
    fontFamily: 'Arial, sans-serif',
    overflowX: 'hidden',
  },
  headerSection: {
    position: 'relative',
    height: '400px', // Control the height of the header
  },
  backgroundImage: {
    background: 'url(/images/service-page-img.jpg) center center no-repeat',
    backgroundSize: 'cover',
    height: '100%',
  },
  firstRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    // backgroundColor: '#fff',
    // boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  blogsHeading: {
    fontSize: '2rem',
    margin: 0,
  },
  categoryDropdown: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    cursor: 'pointer',
    width: '200px',
  },
  blogsBody: {
    padding: '20px',
  },
  blogListSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  blogCard: {
    border: '1px solid #ddd',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  blogImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  blogTitle: {
    fontSize: '1.5rem',
    marginTop: '10px',
  },
  blogAuthor: {
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default Blogs;





