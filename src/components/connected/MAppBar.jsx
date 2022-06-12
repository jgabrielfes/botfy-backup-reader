import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function MAppBar() {
  return (
    <AppBar enableColorOnDark sx={{ left: { xs: 0, md: 280 } }}>
      <Toolbar variant="dense">
        Teste
      </Toolbar>
    </AppBar>
  );
}

export default MAppBar;
