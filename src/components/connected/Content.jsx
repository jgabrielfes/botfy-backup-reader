import React from 'react';
import Box from '@mui/material/Box';

import UploadFile from './UploadFile';

function Content() {
  return (
    <Box
      display="flex"
      height="calc(100vh - 48px)"
      ml={{ md: 35 }}
      mt={6}
      px={4}
      py={2}
    >
      <UploadFile />
    </Box>
  )
}

export default Content;
