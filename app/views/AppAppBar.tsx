import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/premium-themes/onepirate/"
            sx={{ fontSize: 24, fontWeight: 'bold', letterSpacing: 4 }}
          >
            {'ALPACPAC 🦙'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <ButtonGroup variant="contained"  aria-label="button group">
              <Button variant="contained"  sx={{color: '#000000',backgroundColor: (theme) => theme.palette.secondary.main }}>{'Get Started'}</Button>
             <Button variant="contained"  sx={{color: '#000000',backgroundColor: (theme) => theme.palette.secondary.main }}>{'Sign In'}</Button>
          </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;