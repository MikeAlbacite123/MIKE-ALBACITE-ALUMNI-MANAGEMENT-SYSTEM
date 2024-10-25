'use client';

import React, { useState } from 'react';
import { Box, Grid, Paper, TextField, Button, Typography, Link, Container } from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    // Simulate API call to send reset password email
    setMessage(`Password reset link has been sent to ${email}`);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Forgot Password
        </Typography>

        <Typography variant="body1" align="center" gutterBottom>
          Enter your email address below and we'll send you a link to reset your password.
        </Typography>

        {message && (
          <Typography variant="body2" color="secondary" align="center" gutterBottom>
            {message}
          </Typography>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            label="Email"
            variant="outlined"
            onChange={handleEmailChange}
            value={email}
            autoComplete="email"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Send Reset Link
          </Button>
        </Box>

        <Typography variant="body2" align="center" sx={{ marginTop: 2 }}>
          <Link href="/sign-in" underline="hover">
            Back to sign-in
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default ForgotPassword;
