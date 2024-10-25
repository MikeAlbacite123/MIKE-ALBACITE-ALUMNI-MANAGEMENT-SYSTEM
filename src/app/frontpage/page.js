'use client'; // This is necessary for Next.js client-side navigation

import React from 'react';
import { Box, Button, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; // Import the useRouter hook from Next.js

export default function UserSelection() {
  const router = useRouter(); // Initialize the Next.js router

  // Functions to handle button clicks and navigate to respective pages
  const handleAlumniClick = () => {
    router.push('/sign-in'); // Navigate to sign-in page for Alumni
  };

  const handleCollegeDeanClick = () => {
    router.push('/cd-sign-in'); // Navigate to sign-in page for College Dean
  };

  const handleAdminClick = () => {
    router.push('/admin-sign-in'); // Navigate to sign-in page for Admin
  };

  return (
    <>
      {/* Navigation Bar (copied from sign-in page) */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            variant="h4"
            sx={{ flexGrow: 1, color: 'black' }}
          >
            Alumni Management System
          </Typography>

          <IconButton color="inherit" href="/Landingpage" aria-label="about" sx={{ marginRight: 1 }}>
            <InfoIcon />
            <Typography
              variant="h6"
              component="span"
              sx={{ marginLeft: 0.5, color: '#333' }}
            >
              About
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content: Question and Buttons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
          backgroundImage: 'url(/fpbg.jpg)', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Question above the buttons with bigger font size */}
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'black' }}>
          Are you a/an?
        </Typography>

        {/* Button group for different user roles in landscape format */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 5,
            marginTop: 3,
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{ width: '200px', height: '100px', fontSize: '1.5rem' }}
            onClick={handleAlumniClick}
          >
            ALUMNI
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ width: '200px', height: '100px', fontSize: '1.5rem' }}
            onClick={handleCollegeDeanClick}
          >
            COLLEGE DEAN
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ width: '200px', height: '100px', fontSize: '1.5rem' }}
            onClick={handleAdminClick}
          >
            ADMIN
          </Button>
        </Box>
      </Box>
    </>
  );
}
