import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Participants from './Participants';

import countries from '../../utils/countries';
import { phone } from '../../utils/functions';

function MAppBar({ handleOpenDrawer }) {
  const { currentChat } = useSelector(state => state.configs);
  const mobile = useMediaQuery('(max-width: 899px)');

  return (
    <AppBar
      enableColorOnDark
      sx={{
        left: { xs: 0, md: 360 },
        width: { md: 'calc(100% - 360px)' },
      }}
    >
      {!!currentChat && (
        <>
          <Toolbar variant="dense" sx={{ minHeight: 56 }}>
            {mobile && (
              <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleOpenDrawer}>
                <MenuIcon />
              </IconButton>
            )}
            <Avatar
              alt={currentChat.contact.name}
              src={currentChat.imageURL}
              sx={{ mr: 2 }}
            />
            <Stack>
              <Typography fontWeight="medium">
                {currentChat.contact.name}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <img
                  loading="lazy"
                  alt="country"
                  src={`https://flagcdn.com/w20/${countries.find(c => c.phone === currentChat.countryCode).code.toLowerCase()}.png`}
                  width={20}
                  style={{ backgroundColor: 'black', padding: 1 }}
                />
                <Typography variant="caption">
                  {phone(currentChat.contact.number)}
                </Typography>
              </Stack>
            </Stack>
            <IconButton sx={{ ml: 'auto' }} color="inherit">
              <SearchIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <Participants />
        </>
      )}
    </AppBar>
  );
}

MAppBar.propTypes = {
  handleOpenDrawer: PropTypes.func.isRequired,
};

export default MAppBar;
