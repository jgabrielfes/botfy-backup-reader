import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoutIcon from '@mui/icons-material/Logout';
import UploadIcon from '@mui/icons-material/Upload';

import { doChangeTheme, setLoading, setCurrentChat, setFullContent } from '../../redux/reducers/configs';

function MMenu({ open, handleClose }) {
  const menuBtn = document.getElementById('drawer-menu-btn');
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { theme } = useSelector(state => state.configs);

  const handleFile = useCallback(({ target }) => {
    const [file] = target.files;
    const format = file.name.slice(-4);

    if (format === 'bfup') {
      const reader = new FileReader();
      dispatch(setLoading(true));

      reader.onload = () => {
        const { result } = reader;
        dispatch(setFullContent(result));
        dispatch(setCurrentChat(null));
        dispatch(setLoading(false));
      }

      handleClose();
      reader.readAsText(file);
    } else {
      dispatch(setLoading(false));
      enqueueSnackbar('Formato não suportado', { variant: 'error' })
    }
  }, [enqueueSnackbar, dispatch, handleClose])

  return (
    <Menu
      anchorEl={menuBtn}
      open={!!menuBtn && open}
      onClose={handleClose}
    >
      <MenuItem onClick={() => dispatch(doChangeTheme())}>
        <ListItemIcon>
          {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
        </ListItemIcon>
        <ListItemText>
          Modo {theme === 'light' ? 'escuro' : 'claro'}
        </ListItemText>
      </MenuItem>
      <label htmlFor="new-file-btn">
        <input
          type="file"
          id="new-file-btn"
          accept=".bfup"
          style={{ display: 'none' }}
          onChange={handleFile}
        />
        <MenuItem>
          <ListItemIcon>
            <UploadIcon />
          </ListItemIcon>
          <ListItemText>
            Novo arquivo
          </ListItemText>
        </MenuItem>
      </label>
      <Divider sx={{ my: 1 }} />
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText>
          Sair
        </ListItemText>
      </MenuItem>
    </Menu>
  );
}

MMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default MMenu;
