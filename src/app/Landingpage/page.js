'use client';

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

function AlumniManagementSystem() {
  const router = useRouter(); // Initialize the router

  const handleSignInClick = () => {
    router.push('/sign-in'); // Redirect to the sign-in page
  };

  return (
    <Box>
      {/* App Bar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Alumni Management System
          </Typography>
          <Button color="inherit">About</Button>
          <Button color="inherit" onClick={handleSignInClick}>
            Sign-in
          </Button>
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <Container sx={{ paddingY: 8, backgroundColor: '#b3cde0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <Typography variant="h3" gutterBottom>
            Welcome Alumni!
          </Typography>
        </Box>
        <Typography variant="h6" align="center">
          Welcome to the UCLM Online Alumni Management System, your gateway to staying connected with fellow alumni. 
          Our platform offers profile creation, event management, mentorship programs, and fundraising opportunities. 
          Join us to reconnect, network, and contribute to the growth of the UCLM community. Stay engaged and inspired!
        </Typography>
      </Container>
    </Box>
  );
}

export default AlumniManagementSystem;
