'use client';

import React, { useState } from 'react';
import {
  Button,
  TextField,
  Paper,
  Typography,
  Box,
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Container
} from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation'; // Import the Next.js router

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize the router

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setError('');
    console.log('Login successful!');
    console.log('Email:', email, 'Password:', password);

    // After successful login, redirect to the homepage
    router.push('/Homepage');
  };

  return (
    <>
      {/* Navigation Bar */}
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

      {/* Login Form */}
      <Container
        component="main"
        maxWidth="xs"
        sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h4" align="center" gutterBottom>
              Sign-in
            </Typography>

            {error && <Typography color="error">{error}</Typography>}

            {/* Email Field */}
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              onChange={handleEmailChange}
              value={email}
              autoComplete="email"
              InputProps={{ style: { height: 50, fontSize: '1.2rem' } }}
            />

            {/* Password Field */}
            <TextField
              fullWidth
              margin="normal"
              label="Password"
              type="password"
              variant="outlined"
              onChange={handlePasswordChange}
              value={password}
              autoComplete="current-password"
              InputProps={{ style: { height: 50, fontSize: '1.2rem' } }}
            />

            <Typography variant="body2" align="center" sx={{ marginTop: 1 }}>
              Register for a College Dean account here{' '}
              <Link href="/cd-sign-up" underline="hover">
                Sign-Up
              </Link>
            </Typography>

            {/* Sign-in Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 2, height: 50, fontSize: '1.2rem' }}
            >
              Sign-in
            </Button>

            <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
              <Link href="/forgot-password" underline="hover">
                Forgot Password
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
