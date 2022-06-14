import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import UploadIcon from '@mui/icons-material/Upload';

import { doChangeTheme, setLoading, setFullContent } from '../../redux/reducers/configs';

function UploadFile() {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.configs);
  const { enqueueSnackbar } = useSnackbar();

  const handleFile = useCallback(({ target }) => {
    const [file] = target.files;
    const format = file.name.slice(-4);
    dispatch(setLoading(true));

    if (format === 'bfup') {
      const reader = new FileReader();

      reader.onload = () => {
        const { result } = reader;
        dispatch(setFullContent(result));
        dispatch(setLoading(false));
      }

      reader.readAsText(file);
    } else {
      dispatch(setLoading(false));
      enqueueSnackbar('Formato não suportado', { variant: 'error' })
    }
  }, [enqueueSnackbar, dispatch])

  return (
    <>
      <Fab
        color="primary"
        size="small"
        onClick={() => dispatch(doChangeTheme())}
        sx={{
          left: '50%',
          top: 16,
          transform: 'translateX(-50%)',
          position: 'absolute',
        }}
      >
        {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </Fab>
      <Stack m="auto" alignItems="center" p={3} spacing={2}>
        <img
          alt="logo"
          src={require('../../images/logo.png')}
          width={100}
        />
        <label htmlFor="input-file-btn">
          <input
            type="file"
            id="input-file-btn"
            accept=".bfup"
            style={{ display: 'none' }}
            onChange={handleFile}
          />
          <Button
            variant="contained"
            component="span"
            startIcon={<UploadIcon />}
          >
            Selecionar backup
          </Button>
        </label>
      </Stack>
    </>
  );
}

export default UploadFile;
