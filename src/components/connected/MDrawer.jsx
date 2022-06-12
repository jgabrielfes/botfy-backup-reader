import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

import MMenu from './MMenu';

import ChatList from './ChatList';

function MDrawer({ open, handleClose }) {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [search, setSearch] = useState('');
  const mobile = useMediaQuery('(max-width: 899px)');

  useEffect(() => {
    setMenuAnchorEl(null);
  }, [mobile])

  return (
    <Drawer
      variant={mobile ? 'temporary' : 'permanent'}
      open={open}
      onClose={handleClose}
      BackdropProps={{ sx: { backdropFilter: 'blur(10px)' } }}
      PaperProps={{
        sx: {
          boxShadow: !mobile ? 4 : undefined,
          maxWidth: 360,
          width: 1,
        }
      }}
    >
      <Toolbar
        variant="dense"
        disableGutters
        sx={{
          borderBottom: ({ palette }) => `1px solid ${palette.action.focus}`,
          height: 56,
          px: 1,
        }}
      >
        <IconButton
          sx={{ mr: 1 }}
          onClick={({ target }) => setMenuAnchorEl(target)}
        >
          <SettingsIcon />
        </IconButton>

        <MMenu
          anchorEl={menuAnchorEl}
          handleClose={() => setMenuAnchorEl(null)}
        />

        <TextField
          color="secondary"
          placeholder="Buscar"
          value={search}
          size="small"
          fullWidth
          onChange={({ target }) => setSearch(target.value)}
          InputProps={{
            sx: { borderRadius: 5 },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: search && (
              <InputAdornment position="end">
                <IconButton edge="end" color="secondary" onClick={() => setSearch('')}>
                  <CloseIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Toolbar>
      <ChatList handleClose={handleClose} />
    </Drawer>
  );
}

MDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default MDrawer;
