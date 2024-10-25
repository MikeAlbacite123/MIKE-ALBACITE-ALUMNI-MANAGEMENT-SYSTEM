'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  Container,
  TextField,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

export default function AlumniManagementSystem() {
  const router = useRouter(); // Initialize the Next.js router

  // Alumni data (mock)
  const alumniData = [
    {
      name: 'Joseph Francis Pulvera',
      email: 'jfrancis@yahoo.com',
      course: 'BS Information Technology',
      batch: 2020,
      status: 'Active',
      work: 'Teacher in UCLM',
    },
    {
      name: 'Elvin Jr Villarin',
      email: 'Elvinvillarin@gmail.com',
      course: 'BS Information Technology',
      batch: 2020,
      status: 'Active',
      work: 'Teacher in UCLM',
    },
    {
      name: 'Elvin James Villarin',
      email: 'elvin123@gmail.com',
      course: 'BS Information Technology',
      batch: 2020,
      status: 'Active',
      work: 'Teacher in UCLM',
    },
    {
      name: 'Elvin Joseph',
      email: 'elvinkikkie@gmail.com',
      course: 'BS Information Technology',
      batch: 2020,
      status: 'Active',
      work: 'Teacher in UCLM',
    },
  ];

  // State for menu handling
  const [anchorEl, setAnchorEl] = useState(null);

  // Handlers for menu open/close
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handlers for profile actions
  const handleProfileClick = () => {
    router.push('/profile');
    handleMenuClose();
  };

  const handleSettingsClick = () => {
    router.push('/settings');
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    router.push('/logout');
    handleMenuClose();
  };

  // Navigation handler for other buttons
  const handleNavigation = (path) => {
    router.push(path); // Navigate to the specified path
  };

  return (
    <Box sx={{ backgroundColor: '#b3e5fc', minHeight: '100vh' }}>
      {/* App Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            sx={{ color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => handleNavigation('/Homepage')}
          >
            Alumni Management System
          </Typography>

          {/* Navigation */}
          <Box>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/Homepage')}>
              Home
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/forum')}>
              Forum
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/Alumnievents')}>
              Events
            </Button>
            <Button sx={{ color: 'white', backgroundColor: '#999' }} onClick={() => handleNavigation('/alumni')}>
              Alumni
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/Applymentor')}>
              Mentorship
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/Fundraising')}>
              Donate
            </Button>
          </Box>

          {/* Profile Section */}
          <Box display="flex" alignItems="center">
            <IconButton sx={{ color: 'white' }}>
              <NotificationsIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: 'white', mr: 2 }}>
              Will Smith
            </Typography>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <Avatar alt="Will Smith" src="/path-to-profile-pic.jpg" /> {/* Replace with actual image path */}
            </IconButton>

            {/* Profile Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
              <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
              <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Search Section */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
          <TextField
            id="outlined-basic"
            label="Filter by name, course, etc."
            variant="outlined"
            sx={{ width: '60%', mr: 2 }}
          />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </Box>

        {/* Alumni Cards Section */}
        <Grid container spacing={4}>
          {alumniData.map((alumni, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ boxShadow: 3 }}>
                <Box display="flex" alignItems="center" sx={{ padding: 2 }}>
                  <Avatar
                    sx={{ width: 56, height: 56, mr: 2 }}
                    alt={alumni.name}
                    src={`/path-to-avatar-${index + 1}.jpg`} // Placeholder, replace with actual avatar image
                  />
                  <CardContent>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      <strong>Name:</strong> {alumni.name}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Email:</strong> {alumni.email}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Course:</strong> {alumni.course}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Batch:</strong> {alumni.batch}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Status:</strong> {alumni.status}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Currently Working:</strong> {alumni.work}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
