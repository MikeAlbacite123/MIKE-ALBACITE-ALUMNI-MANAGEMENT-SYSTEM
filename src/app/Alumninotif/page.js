'use client';

import React from 'react';
import { AppBar, Toolbar, Button, IconButton, Typography, Box, Container, Grid, Card, CardContent, CardMedia, List, ListItem, ListItemText } from '@mui/material';
import { AccountCircle, Notifications } from '@mui/icons-material'; // Import Notifications icon
import Link from 'next/link';

export default function HomePage() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ backgroundColor: '#e6f2ff', minHeight: '100vh' }}>
      {/* Top App Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#4d4d4d', color: '#fff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo and Title */}
          <Typography variant="h6" noWrap>
            Alumni Management System
          </Typography>

          {/* Navigation Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit">
              <Link href="/" passHref>
                <Typography color="inherit">Home</Typography>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/forum" passHref>
                <Typography color="inherit">Forum</Typography>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/events" passHref>
                <Typography color="inherit">Events</Typography>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/alumni" passHref>
                <Typography color="inherit">Alumni</Typography>
              </Link>
            </Button>
            <Button color="inherit">
              <Link href="/fundraising" passHref>
                <Typography color="inherit">Donate</Typography>
              </Link>
            </Button>
          </Box>

          {/* Profile and Notifications */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Notification Icon */}
            <IconButton color="white">
              <Notifications />
            </IconButton>
            {/* User Name Button */}
            <Button color="inherit">
              Will Smith
            </Button>
            {/* Profile Icon */}
            <IconButton color="inherit" onClick={handleMenuClick}>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

     

          {/* Events Sidebar */}
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: '#e6f2ff', borderRadius: 2, padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Announcements
                </Typography>
                <List>
                  <ListItem button>
                    <ListItemText primary="Career Talk" secondary="10:00 AM - 12:00 PM • August 4, 2024" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Alumni Homecoming" secondary="3:00 PM - 6:00 PM • August 4, 2024" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Workshop on Entrepreneurship" secondary="1:00 PM - 4:00 PM • August 5, 2024" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Networking Night" secondary="7:00 PM - 9:00 PM • August 5, 2024" />
                  </ListItem>
                </List>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                  View more
                </Button>
              </CardContent>
            </Card>
          </Grid>
   


      {/* Footer */}
      <footer style={{ marginTop: '16px', textAlign: 'center' }}>
        <Typography variant="body2" color="textSecondary">
          © 2024 University of Cebu Lapu-Lapu and Mandaue Alumni Management System
        </Typography>
      </footer>
    </Box>
  );
}
