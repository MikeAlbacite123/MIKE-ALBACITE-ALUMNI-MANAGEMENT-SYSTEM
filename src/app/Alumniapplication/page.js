"use client";

import React from 'react';
import {
  AppBar, Toolbar, Typography, Button, Container, Card, CardContent,
  Grid, Menu, MenuItem, IconButton, Box
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AccountCircle } from '@mui/icons-material';

export default function MyApplications() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const applications = [
    { id: 1, date: '01-Aug-2024' },
    { id: 2, date: '02-Aug-2024' },
    { id: 3, date: '03-Aug-2024' },
    { id: 4, date: '04-Aug-2024' },
  ];

  return (
    <Box sx={{ backgroundColor: '#b3e5fc', minHeight: '100vh' }}> {/* Light blue background */}
      {/* AppBar with navigation and user profile menu */}
      <AppBar position="static" sx={{ backgroundColor: '#333' }}> {/* Dark AppBar */}
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
            Alumni Management System
          </Typography>

          {/* Navigation Links */}
          <Box>
            <Button sx={{ color: 'white' }}>Home</Button>
            <Button sx={{ color: 'white' }}>Forum</Button>
            <Button sx={{ color: 'white' }}>Events</Button>
            <Button sx={{ color: 'white' }}>Alumni</Button>
            <Button sx={{ color: 'white' }}>Mentorship</Button>
            <Button sx={{ color: 'white' }}>About</Button>
          </Box>

          {/* Notifications and User Profile */}
          <Box>
            <IconButton sx={{ color: 'white' }}>
              <NotificationsIcon />
            </IconButton>
            <Button sx={{ color: 'white' }}>Will Smith</Button>
            <IconButton sx={{ color: 'white' }} onClick={handleMenuClick}>
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Membership Program</MenuItem>
              <MenuItem onClick={handleMenuClose}>Apply for Mentorship</MenuItem>
              <MenuItem onClick={handleMenuClose}>My Applications</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* My Applications Section */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
          My Applications
        </Typography>

        {/* Application Cards */}
        <Grid container spacing={3}>
          {applications.map((app) => (
            <Grid item xs={12} sm={6} key={app.id}>
              <Card sx={{ backgroundColor: '#e3f2fd', boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Application {app.id}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Status: Pending
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Submitted on: {app.date}
                  </Typography>
                  <Box textAlign="center" mt={2}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ backgroundColor: '#333', color: 'white' }}
                      fullWidth
                    >
                      Cancel
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <footer style={{ marginTop: '16px', textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          © 2024 University of Cebu Lapu-Lapu and Mandaue Alumni Management System
        </Typography>
      </footer>
    </Box>
  );
}
