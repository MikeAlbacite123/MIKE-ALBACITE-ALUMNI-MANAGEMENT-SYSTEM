'use client';

import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography, Box, Container, Grid, Card, CardContent, CardMedia, Avatar, Menu, MenuItem } from '@mui/material';
import { Notifications } from '@mui/icons-material'; 
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

export default function HomePage() {
  const router = useRouter();

  // State for profile menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Function to handle logout and redirect to sign-in page
  const handleLogout = () => {
    handleMenuClose(); // Close the profile menu
    router.push('/sign-in'); // Navigate to sign-in page
  };

  return (
    <Box sx={{ backgroundColor: '#b3e5fc', minHeight: '100vh' }}>
      {/* Top App Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo and Title */}
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
            Alumni Management System
          </Typography>

          {/* Navigation Links */}
          <Box>
            <Button sx={{ color: 'white', backgroundColor: '#999' }}>
              <Link href="/" passHref>
                <Typography color="inherit">Home</Typography>
              </Link>
            </Button>
            <Button sx={{ color: 'white' }}>
              <Link href="/forum" passHref>
                <Typography color="inherit">Forum</Typography>
              </Link>
            </Button>
            <Button sx={{ color: 'white' }}>
              <Link href="/Alumnievents" passHref>
                <Typography color="inherit">Events</Typography>
              </Link>
            </Button>
            <Button sx={{ color: 'white' }}>
              <Link href="/Alumnilist" passHref>
                <Typography color="inherit">Alumni</Typography>
              </Link>
            </Button>
            <Button sx={{ color: 'white' }}>
              <Link href="/Applymentor" passHref>
                <Typography color="inherit">Mentorship</Typography>
              </Link>
            </Button>
            <Button sx={{ color: 'white' }}>
              <Link href="/Fundraising" passHref>
                <Typography color="inherit">Donate</Typography>
              </Link>
            </Button>
          </Box>

          {/* Profile and Notifications */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Notification Icon */}
            <Button sx={{ color: 'white' }}>
              <Link href="/Alumninotif" passHref>
                <IconButton sx={{ color: 'white' }}>
                  <Notifications />
                </IconButton>
              </Link>
            </Button>

            {/* Will Smith's Name */}
            <Button sx={{ color: 'white' }}>
              <Link href="/profile" passHref> {/* Assuming '/profile' is the link for user profile */}
                <Typography color="inherit">Will Smith</Typography>
              </Link>
            </Button>

            {/* Profile Icon */}
            <Button sx={{ color: 'white' }} onClick={handleMenuClick}>
              <Avatar alt="Will Smith" src="/path-to-profile-pic.jpg" /> {/* Replace with actual profile picture path */}
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem> {/* Updated this */}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Homepage Content */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
          Welcome Alumni!
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {/* Main News Section */}
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="300"
                image="/albg.jpg" // Placeholder image
                alt="Alumni Banner"
              />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  UCLM Launches Innovative Online Alumni Management System
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Cebu, Philippines - August 2, 2024: The University of Cebu Lapu-Lapu and Mandaue (UCLM) is proud to announce the launch of its new Online Alumni Management System, designed to enhance the connection between the university and its alumni community.
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                  This cutting-edge platform provides a comprehensive suite of features aimed at facilitating communication, engagement, and collaboration among UCLM graduates.
                </Typography>
                <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Events Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ backgroundColor: '#f5f5f5', p: 3, borderRadius: 2, boxShadow: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Upcoming Events
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Card sx={{ boxShadow: 1 }}>
                  <CardContent>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Palarong Pinoy
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      1 week ago
                    </Typography>
                    <Button variant="text" sx={{ textAlign: 'left', color: 'primary.main' }}>
                      Read more
                    </Button>
                  </CardContent>
                </Card>
                <Card sx={{ boxShadow: 1 }}>
                  <CardContent>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Alumni Job Fair
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      2 weeks ago
                    </Typography>
                    <Button variant="text" sx={{ textAlign: 'left', color: 'primary.main' }}>
                      Read more
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Grid>
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
