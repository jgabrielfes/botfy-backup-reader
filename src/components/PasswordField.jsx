import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function PasswordField({ submitting, setPassword }) {
  const [show, setShow] = useState(false);

  return (
    <TextField
      color="secondary"
      type={show ? 'text' : 'password'}
      variant="filled"
      label="Senha"
      size="small"
      disabled={submitting}
      required
      fullWidth
      onChange={({ target }) => setPassword(target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShow(prev => !prev)}
              onMouseDown={event => event.preventDefault()}
              edge="end"
            >
              {show ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
}

PasswordField.propTypes = {
  submitting: PropTypes.bool.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default PasswordField;
