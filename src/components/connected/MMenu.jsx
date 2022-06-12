import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import UploadIcon from '@mui/icons-material/Upload';

import { doChangeTheme, setChat, setCurrentChat } from '../../redux/reducers/configs';

function MMenu({ anchorEl, handleClose }) {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.configs);

  const handleFile = useCallback(({ target }) => {
    const [file] = target.files;
    const reader = new FileReader();

    handleClose();
    reader.onload = () => {
      const { result } = reader;
      dispatch(setChat(result));
      dispatch(setCurrentChat(''));
    }

    reader.readAsText(file);
  }, [dispatch, handleClose])

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
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
    </Menu>
  );
}

MMenu.propTypes = {
  anchorEl: PropTypes.element.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default MMenu;
