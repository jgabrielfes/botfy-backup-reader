import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function MAppBar() {
  return (
    <AppBar enableColorOnDark sx={{ left: { xs: 0, md: 360 } }}>
      <Toolbar variant="dense" sx={{ height: 56 }}>
        Teste
      </Toolbar>
    </AppBar>
  );
}

export default MAppBar;
