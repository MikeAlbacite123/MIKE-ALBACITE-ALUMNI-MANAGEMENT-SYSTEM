'use client';

import React, { useState } from 'react';
import { Box, Grid, TextField, MenuItem, Button, InputLabel, FormControl, Select, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; 

const SignUpForm = () => {
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [department, setDepartment] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State to handle success message
  const router = useRouter(); // Initialize the router
  
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleCancel = () => {
    router.push('/sign-in'); // Navigate to the sign-in page
  };

  const handleSave = () => {
    // Logic to save the account data (API call or state update can go here)

    // Display success message
    setSuccessMessage('You successfully created an account!');
    
    // Optionally, redirect to another page after a few seconds
    setTimeout(() => {
      router.push('/sign-in');
    }, 3000); // Redirect to sign-in after 3 seconds
  };

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 4
      }}
    >
      <Box 
        sx={{
          width: 600,
          p: 4,
          border: '1px solid #ccc',
          borderRadius: 4,
          backgroundColor: '#f0f0f0'
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4 }}>
          CREATE ACCOUNT
        </Typography>

        {/* Success message */}
        {successMessage && (
          <Typography variant="h6" color="primary" sx={{ textAlign: 'center', mb: 2 }}>
            {successMessage}
          </Typography>
        )}

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Student ID" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="First Name" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last Name" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Gender</InputLabel>
              <Select value={gender} onChange={handleGenderChange} label="Gender">
                <MenuItem value=""><em>Select</em></MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Batch" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Course</InputLabel>
              <Select value={course} onChange={handleCourseChange} label="Course">
                <MenuItem value=""><em>Select</em></MenuItem>
                <MenuItem value="CS">Computer Science</MenuItem>
                <MenuItem value="IT">Information Technology</MenuItem>
                <MenuItem value="Criminology">Criminology</MenuItem>
                <MenuItem value="Accounting">Accounting</MenuItem>
                <MenuItem value="Custom Administration">Custom Administration</MenuItem>
                <MenuItem value="Marine Engineering">Marine Engineering</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Department</InputLabel>
              <Select value={department} onChange={handleDepartmentChange} label="Department">
                <MenuItem value=""><em>Select</em></MenuItem>
                <MenuItem value="CSS">CSS Department</MenuItem>
                <MenuItem value="Accounting">Accounting Department</MenuItem>
                <MenuItem value="Criminology">Criminology Department</MenuItem>
                <MenuItem value="Custom Administration">Custom Administration Department</MenuItem>
                <MenuItem value="Engineering">Engineering Department</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Email" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Password" type="password" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Current Work" fullWidth variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" component="label">
              Upload Picture
              <input type="file" hidden />
            </Button>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignUpForm;
