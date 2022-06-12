import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import UploadFile from './UploadFile';

function Content() {
  const { chats } = useSelector(state => state.configs);

  return (
    <Box
      display="flex"
      minHeight={chats.length === 0 ? '100vh' : 'calc(100vh - 56px)'}
      ml={{ md: 45 }}
      mt={chats.length === 0 ? 0 : 7}
      px={4}
      py={2}
    >
      {chats.length === 0 ? <UploadFile /> : (
        <span>Chat</span>
      )}
    </Box>
  )
}

export default Content;
