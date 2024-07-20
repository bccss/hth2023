import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

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
        <Grid item xs={12} md={6}>
        <Typography sx={{ fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Hack-the-Heights. All rights reserved. Organized @ Boston College.
        </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
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
