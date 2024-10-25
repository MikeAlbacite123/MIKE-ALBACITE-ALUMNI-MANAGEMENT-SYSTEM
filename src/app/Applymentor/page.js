'use client';

import React from 'react';
import { Container, TextField, Button, Typography, Box, MenuItem, AppBar, Toolbar, IconButton, Menu, Avatar } from '@mui/material';
import { Menu as MenuIcon, Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';
import Link from 'next/link';

export default function MentorshipForm() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: '#b3e5fc', minHeight: '100vh' }}> {/* Light blue background */}
      <AppBar position="static" sx={{ backgroundColor: '#333' }}> {/* Dark AppBar */}
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
            Alumni Management System
          </Typography>

          {/* Navigation Links */}
          <Box>
            <Button sx={{ color: 'white' }}>
              <Link href="/Homepage" passHref>
                Home
              </Link>
            </Button>
            <Button sx={{ color: 'white' }}>
              <Link href="/forum" passHref>
                Forum
              </Link>
            </Button>
            <Button sx={{ color: 'white' }}>
              <Link href="/Alumnievents" passHref>
                Events
              </Link>
            </Button>
            <Button sx={{ color: 'white' }}>
              <Link href="/Alumnilist" passHref>
                Alumni
              </Link>
            </Button>
            <Button sx={{ color: 'white', backgroundColor: '#999' }}>
              <Link href="/alumni" passHref>
                Mentorship
              </Link>
            </Button>
            <Button sx={{ color: 'white' }}>
              <Link href="/Fundraising" passHref>
                Donate
              </Link>
            </Button>
          </Box>

          {/* Notifications and Profile */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <NotificationsIcon />
            </IconButton>
            <Typography variant="h6" sx={{ color: 'white', mr: 2 }}>
              Will Smith
            </Typography>
            <IconButton
              color="inherit"
              onClick={handleMenuClick}
            >
              <Avatar alt="Will Smith" src="/path-to-profile-pic.jpg" />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Layout with Sidebar Menu */}
      <Container maxWidth="lg" sx={{ display: 'flex', mt: 4 }}>
        {/* Sidebar Menu */}
        <Box sx={{ width: '20%', mr: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Mentorship Program
          </Typography>
          <MenuItem>
            <Link href="/apply" passHref>
              Apply for Mentorship
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/Alumniapplication" passHref>
              My Applications
            </Link>
          </MenuItem>
        </Box>

        {/* Form Container */}
        <Box sx={{ width: '80%' }}>
          <Box textAlign="center" mb={4}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
              Apply for the Mentorship Program
            </Typography>
          </Box>

          {/* Form Fields */}
          <Box component="form" noValidate autoComplete="off" sx={{ backgroundColor: 'white', p: 3, borderRadius: 2, boxShadow: 3 }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              margin="normal"
              required
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              required
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Background"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Interests"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              sx={{ mb: 3 }}
            />
            <TextField
              fullWidth
              label="Mentorship Goals"
              variant="outlined"
              margin="normal"
              multiline
              rows={4}
              sx={{ mb: 3 }}
            />

            <Box textAlign="center" mt={4}>
              <Button variant="contained" color="primary" size="large" sx={{ backgroundColor: '#333' }}>
                Submit Application
              </Button>
            </Box>
          </Box>
        </Box>
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
