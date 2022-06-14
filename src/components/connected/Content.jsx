import React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';

import Chat from './Chat';
import UploadFile from './UploadFile';

function Content() {
  const { fullContent } = useSelector(state => state.configs);

  return (
    <Box
      id="chat-container"
      display="flex"
      flexDirection="column-reverse"
      minHeight={fullContent.length === 0 ? '100vh' : 'calc(100vh - 56px)'}
      ml={{ md: fullContent.length !== 0 ? 45 : 0 }}
      mt={fullContent.length === 0 ? 0 : 7}
      px={4}
      py={2}
    >
      {fullContent.length === 0 ? <UploadFile /> : <Chat />}
    </Box>
  )
}

export default Content;
