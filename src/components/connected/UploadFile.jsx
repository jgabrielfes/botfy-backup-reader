import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function UploadFile() {
  return (
    <Stack m="auto" p={3} spacing={2}>
      <img
        alt="logo"
        src={require('../../images/logo.png')}
        width={100}
      />
      <Button variant="contained">
        Upload
      </Button>
    </Stack>
  );
}

export default UploadFile;
