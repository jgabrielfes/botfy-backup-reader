import React from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

function MDrawer() {
  const mobile = useMediaQuery('(max-width: 899px)');

  return (
    <Drawer
      variant={mobile ? 'temporary' : 'permanent'}
      open
      BackdropProps={{ sx: { backdropFilter: 'blur(10px)' } }}
      PaperProps={{
        sx: {
          maxWidth: 280,
          width: 1,
        }
      }}
    >
      <AppBar position="static" enableColorOnDark>
        <Toolbar variant="dense">
          Menu
        </Toolbar>
      </AppBar>
    </Drawer>
  );
}

export default MDrawer;
