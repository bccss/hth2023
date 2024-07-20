import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Box, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { styled } from '@mui/system';
import hthLogo from '../../assets/icons/hth-logo.svg';

const HeaderLink = styled(Link)({
  textTransform: 'lowercase',
  color: '#D6CEA2',
  fontWeight: 'bold',
  textDecoration: 'none',
  fontSize: '1.2rem', // Increase the font size
  '&:hover': {
    color: '#FFD700', // Change color on hover
    transition: 'color 0.3s ease',
  },
  '&:active': {
    transform: 'scale(0.95)', // Scale down on click
    transition: 'transform 0.1s ease',
  },
});

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuOpen = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
  };

  const menuItems = ["about", "events", "FAQ", "sponsors", "past events"];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: '#343D24', fontFamily: 'Poppins, sans-serif', borderRadius: '0 0 16px 16px' }} className='header'>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href="#" onClick={scrollToTop}>
              <img src={hthLogo} alt="HTH Logo" style={{ maxHeight: '40px' }} />
            </Link>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map(item => (
              <Button
                color="inherit"
                key={item}
                sx={{ ml: 2, fontSize: '1rem', padding: '8px 16px' }} // Adjust the font size and padding
                className="menu-button"
              >
                <HeaderLink href={`#${item}`}>{item}</HeaderLink>
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="menu"
            edge="end"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon sx={{ color: '#D6CEA2' }} />
          </IconButton>
          <Menu
            anchorEl={openMenu}
            open={Boolean(openMenu)}
            onClose={handleMenuClose}
            PaperProps={{ style: { backgroundColor: '#343D24' } }}
          >
            {menuItems.map(item => (
              <MenuItem onClick={handleMenuClose} key={item} sx={{ color: '#343D24' }}>
                <HeaderLink href={`#${item}`}>{item}</HeaderLink>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
