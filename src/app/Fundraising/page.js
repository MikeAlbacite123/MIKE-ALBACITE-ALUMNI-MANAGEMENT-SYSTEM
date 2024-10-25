'use client'; // Add this directive if using Next.js

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button, IconButton, Typography, Box, Container, Menu, MenuItem, Select, FormControl, InputLabel, TextField, Grid, Card, CardContent, CardActions } from '@mui/material';
import { Notifications as NotificationsIcon, AccountCircle } from '@mui/icons-material';

export default function FundraisingCampaigns() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [paymentMethod1, setPaymentMethod1] = React.useState('');
  const [paymentMethod2, setPaymentMethod2] = React.useState('');

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlePaymentMethodChange1 = (event) => {
    setPaymentMethod1(event.target.value);
  };

  const handlePaymentMethodChange2 = (event) => {
    setPaymentMethod2(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: '#b3e5fc', minHeight: '100vh' }}> {/* Light blue background */}
      {/* Top App Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#333' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo and Title */}
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
            Alumni Management System
          </Typography>

          {/* Navigation Links */}
          <Box>
            <Link href="/Homepage" passHref>
              <Button sx={{ color: 'white' }}>Home</Button>
            </Link>
            <Link href="/forum" passHref>
              <Button sx={{ color: 'white' }}>Forum</Button>
            </Link>
            <Link href="/Alumnievents" passHref>
              <Button sx={{ color: 'white' }}>Events</Button>
            </Link>
            <Link href="/Alumnilist" passHref>
              <Button sx={{ color: 'white' }}>Alumni</Button>
            </Link>
            <Link href="/Applymentor" passHref>
              <Button sx={{ color: 'white' }}>Mentorship</Button>
            </Link>
            <Link href="/donate" passHref>
              <Button sx={{ color: 'white', backgroundColor: '#999' }}>Donate</Button>
            </Link>
          </Box>

          {/* Profile & Notifications */}
          <Box>
            <IconButton sx={{ color: 'white' }}>
              <NotificationsIcon />
            </IconButton>
            <Button sx={{ color: 'white' }}>Will Smith</Button>
            <IconButton sx={{ color: 'white' }} onClick={handleMenuClick}>
              <AccountCircle />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Fundraising Campaigns Section */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
          Fundraising Campaigns
        </Typography>

        {/* Fundraising Campaigns Grid */}
        <Grid container spacing={4}>
          {/* Scholarship Fund Campaign */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                  Scholarship Fund
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  DESCRIPTION: Help provide scholarships for deserving students.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  GOAL: 50,000
                </Typography>
                <TextField
                  fullWidth
                  label="Donation Amount"
                  variant="outlined"
                  sx={{ mb: 2 }}
                  required
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Select Payment Method</InputLabel>
                  <Select
                    value={paymentMethod1}
                    onChange={handlePaymentMethodChange1}
                    label="Select Payment Method"
                  >
                    <MenuItem value="gcash">GCash</MenuItem>
                    <MenuItem value="paypal">PayPal</MenuItem>
                  </Select>
                </FormControl>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button variant="contained" color="primary" size="large">
                    Pay
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>

          {/* Library Renovation Campaign */}
          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                  Library Renovation
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  DESCRIPTION: Support the renovation of the campus library.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  GOAL: 30,000
                </Typography>
                <TextField
                  fullWidth
                  label="Donation Amount"
                  variant="outlined"
                  sx={{ mb: 2 }}
                  required
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <InputLabel>Select Payment Method</InputLabel>
                  <Select
                    value={paymentMethod2}
                    onChange={handlePaymentMethodChange2}
                    label="Select Payment Method"
                  >
                    <MenuItem value="gcash">GCash</MenuItem>
                    <MenuItem value="paypal">PayPal</MenuItem>
                  </Select>
                </FormControl>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button variant="contained" color="primary" size="large">
                    Pay
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
