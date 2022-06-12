import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { doChangeTheme } from '../../redux/reducers/configs';

function MMenu({ anchorEl, handleClose }) {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.configs);

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
          Modo {theme === 'light' ? 'Escuro' : 'Claro'}
        </ListItemText>
      </MenuItem>
    </Menu>
  );
}

MMenu.propTypes = {
  anchorEl: PropTypes.element.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default MMenu;
