import {
  AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import hthLogo from '../../assets/icons/hth-logo.svg';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuOpen = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
  };

  // const menuItems = ["About", "Events", "FAQ", "Team", "Sponsors", "Past Events", "Contact"];
  //when we add the "team" and "sponsors" section, use the top array
  const menuItems = ["About", "Events", "FAQ", "Sponsors", "Past Events"];

  return (
    <>
      {/* AppBar color and font-family */}
      <AppBar position="sticky" sx={{ backgroundColor: '#D6CEA2', fontFamily: 'Poppins, sans-serif' }} className='header'>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <img src={hthLogo} alt="HTH Logo" style={{ maxHeight: '40px' }} />
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map(item => (
              <Button color="inherit" key={item} sx={{ ml: 2, color: '#343D2d' }}>
                {/* Button text color */}
                <a href={`#${item}`} style={{ textDecoration: 'none', color: '#343D2d' }}>{item}</a>
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton 
            color="inherit" 
            aria-label="menu" 
            edge="end"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleMenuOpen}
          >
            {/* Icon color */}
            <MenuIcon sx={{ color: '#343D24' }} />
          </IconButton>

          {/* Mobile Dropdown Menu */}
          <Menu
            anchorEl={openMenu}
            open={Boolean(openMenu)}
            onClose={handleMenuClose}
            PaperProps={{ style: { backgroundColor: '#D6CEA2' } }} // Menu background color
          >
            {menuItems.map(item => (
              <MenuItem onClick={handleMenuClose} key={item} sx={{ color: '#343D24' }}>
                {/* Menu item text color */}
                <a href={`#${item}`} style={{ textDecoration: 'none', color: '#343D24' }}>{item}</a>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}