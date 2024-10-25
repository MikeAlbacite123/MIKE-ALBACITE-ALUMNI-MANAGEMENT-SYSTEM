'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+
import {
  AppBar, Toolbar, Button, IconButton, Typography, Menu, MenuItem, Box, Container, Card, CardContent, CardActions, Avatar
} from '@mui/material';
import { Notifications as NotificationsIcon } from '@mui/icons-material';

export default function AlumniEvents() {
  const router = useRouter(); // Initialize the Next.js router
  const [anchorEl, setAnchorEl] = useState(null);

  // Handles opening the profile menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handles closing the profile menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle navigation for buttons
  const handleNavigation = (path) => {
    router.push(path); // Navigate to the specified path
  };

  // Handle event participation click
  const handleEventClick = (eventId) => {
    router.push(`/events/${eventId}`); // Redirect to the specific event's page
  };

  return (
    <Box sx={{ backgroundColor: '#b3e5fc', minHeight: '100vh' }}>
      {/* Top App Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo and Title */}
          <Typography
            variant="h4"
            sx={{ color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={() => handleNavigation('/Homepage')}
          >
            Alumni Management System
          </Typography>

          {/* Navigation Links */}
          <Box>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/Homepage')}>
              Home
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/forum')}>
              Forum
            </Button>
            <Button sx={{ color: 'white', backgroundColor: '#999' }} onClick={() => handleNavigation('/alumni')}>
              Events
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/Alumnilist')}>
              Alumni
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/Applymentor')}>
              Mentorship
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => handleNavigation('/Fundraising')}>
              Donate
            </Button>
          </Box>

          {/* Notifications and Profile with Avatar */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton sx={{ color: 'white' }}>
              <NotificationsIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: 'white', mr: 2 }}>
              Will Smith
            </Typography>
            <IconButton color="inherit" onClick={handleMenuClick}>
              <Avatar alt="Will Smith" src="/path-to-profile-pic.jpg" /> {/* Replace with actual image path */}
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Upcoming Events Section */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
          Upcoming Events
        </Typography>

        {/* Event Cards */}
        {[
          {
            id: 'event-1',
            title: 'A Comprehensive Alumni Management System for UCLM',
            description: 'This event presents the development and implementation of a comprehensive alumni management system for the University of Cebu Lapu-Lapu and Mandaue (UCLM).',
            date: 'August 3, 2024',
          },
          {
            id: 'event-2',
            title: 'UCLM Launches Innovative Alumni Management System',
            description: 'The University of Cebu Lapu-Lapu and Mandaue (UCLM) has launched an innovative alumni management system designed to enhance communication and engagement with its graduates.',
            date: 'August 3, 2024',
          },
        ].map((event, index) => (
          <Card key={index} sx={{ backgroundColor: '#e3f2fd', mb: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                {event.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {event.description}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Date: {event.date}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: 2, mb: 2 }}
                onClick={() => handleEventClick(event.id)} // Navigate to event page on click
              >
                Participate
              </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
    </Box>
  );
}
