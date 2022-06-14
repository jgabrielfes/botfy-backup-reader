import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';

import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';

import ChatList from './ChatList';
import MMenu from './MMenu';

import { setVisibleContent } from '../../redux/reducers/configs';
import { paginate, getLastPage } from '../../utils/functions';

function MDrawer({ open, handleClose }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(true);
  const dispatch = useDispatch();
  const { currentChat, fullContent } = useSelector(state => state.configs);
  const mobile = useMediaQuery('(max-width: 899px)');

  function onScrollChat({ currentTarget }) {
    const scroll = currentTarget.scrollTop;
    const height = currentTarget.scrollHeight - currentTarget.clientHeight;
    if (page < getLastPage(fullContent, 40) && scroll / height > 0.9) {
      setNext(true);
      setPage(prev => prev + 1);
      currentTarget.scrollTo(0, 0.2 * height);
    } else if (page > 1 && scroll / height < 0.1) {
      setNext(false);
      setPage(prev => prev - 1);
      currentTarget.scrollTo(0, 0.8 * height);
    }
  }

  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [mobile])

  useEffect(() => {
    if (next) {
      dispatch(setVisibleContent(paginate(fullContent, 40, page)));
    } else {
      dispatch(setVisibleContent(paginate(fullContent, 40, page)));
    }
  }, [page])

  return (
    <Drawer
      variant={mobile ? 'temporary' : 'permanent'}
      open={open || !currentChat}
      onClose={handleClose}
      BackdropProps={{ sx: { backdropFilter: 'blur(10px)' } }}
      PaperProps={{
        id: 'chat-list-container',
        sx: {
          boxShadow: !mobile ? 4 : undefined,
          maxWidth: 360,
          width: 1,
        },
        onScroll: onScrollChat,
      }}
    >
      <Toolbar variant="dense" disableGutters sx={{ height: 56, px: 1 }}>
        <IconButton
          id="drawer-menu-btn"
          sx={{ mr: 1 }}
          onClick={({ currentTarget }) => setMenuOpen(true)}
        >
          <SettingsIcon />
        </IconButton>

        <MMenu
          open={menuOpen}
          handleClose={() => setMenuOpen(false)}
        />

        <TextField
          type="search"
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
          }}
        />
      </Toolbar>

      <Divider />

      <ChatList handleClose={handleClose} />
    </Drawer>
  );
}

MDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default MDrawer;
