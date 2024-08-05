import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import mlhLogo from '../../assets/icons/mlh.svg'; // Make sure to update the path to your actual logo file

const Footer = () => {
  return (
    <Box
      component="footer"
      bgcolor="#343D24" // Background color
      py={3}
      px={3}
      sx={{
        color: '#D6CEA2', // Font color
        textAlign: 'center',
        mt: 'auto',
        width: '100%'
      }}
      id="Contact"
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener">
            <img src={mlhLogo} alt="MLH Logo" style={{ width: '100px' }} />
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Hack-the-Heights. All rights reserved. Organized @ Boston College.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
          <Link href="https://www.facebook.com/bostoncollegecss/" color="inherit" sx={{ mx: 1 }}>
            <Facebook
              sx={{
                fontSize: {
                  xs: '2rem',
                  md: '2rem',
                  lg: '2.5rem'
                },
                color: '#D6CEA2' // Accent Color
              }}
            />
          </Link>
          <Link href="https://twitter.com/bccssociety/" color="inherit" sx={{ mx: 1 }}>
            <Twitter
              sx={{
                fontSize: {
                  xs: '2rem',
                  md: '2rem',
                  lg: '2.5rem'
                },
                color: '#D6CEA2' // Accent Color
              }}
            />
          </Link>
          <Link href="https://www.instagram.com/bccssociety/" color="inherit" sx={{ mx: 1 }}>
            <Instagram
              sx={{
                fontSize: {
                  xs: '2rem',
                  md: '2rem',
                  lg: '2.5rem'
                },
                color: '#D6CEA2' // Accent Color
              }}
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
