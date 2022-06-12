import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { setChat } from '../../redux/reducers/configs';

function UploadFile() {
  const dispatch = useDispatch();

  const handleFile = useCallback(({ target }) => {
    const [file] = target.files;
    const reader = new FileReader();

    reader.onload = () => {
      const { result } = reader;
      dispatch(setChat(result));
    }

    reader.readAsText(file);
  }, [dispatch])

  return (
    <Stack m="auto" p={3} spacing={2}>
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
        <Button variant="contained" component="span" fullWidth>
          Upload
        </Button>
      </label>
    </Stack>
  );
}

export default UploadFile;
