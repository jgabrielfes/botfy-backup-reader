import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

function MAppBar({ handleOpenDrawer }) {
  const mobile = useMediaQuery('(max-width: 899px)');

  return (
    <AppBar enableColorOnDark sx={{ left: { xs: 0, md: 360 } }}>
      <Toolbar variant="dense" sx={{ height: 56 }}>
        {mobile && (
          <IconButton sx={{ mr: 2 }} onClick={handleOpenDrawer}>
            <MenuIcon />
          </IconButton>
        )}
        Teste
      </Toolbar>
    </AppBar>
  );
}

MAppBar.propTypes = {
  handleOpenDrawer: PropTypes.func.isRequired,
};

export default MAppBar;
