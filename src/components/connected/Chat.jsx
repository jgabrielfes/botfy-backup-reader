import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { getParticipant } from '../../utils/functions';

function Chat() {
  const { currentChat } = useSelector(state => state.configs);

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [currentChat])

  if (!currentChat) return null;

  return [...currentChat.messages].reverse().map((message, index) => (
    <Paper
      key={`${message.id}-${index}`}
      component={Stack}
      spacing={2}
      sx={{
        bgcolor: message.type === 'from-participant' ? 'primary.main' : 'primary.dark',
        color: 'primary.contrastText',
        maxWidth: 0.9,
        ml: message.type === 'from-participant' ? 'auto' : 0,
        my: 1,
        p: 1.5,
        width: 'fit-content',
      }}
    >
      {message.participantId !== 0 && (
        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1}>
          <Typography variant="h6">
            {getParticipant(message.participantId, currentChat).name}
          </Typography>
          <Avatar
            alt={getParticipant(message.participantId, currentChat).name}
            src={getParticipant(message.participantId, currentChat).imageURL}
            sx={{ border: 2, borderColor: 'primary.dark' }}
          />
        </Stack>
      )}
      <Typography align="justify" sx={{ wordBreak: 'break-word' }}>
        {message.text}
      </Typography>
      <Typography
        variant="body2"
        align="right"
        fontWeight="light"
        sx={{ opacity: 0.9 }}
      >
        {new Date(message.createdAt).toLocaleDateString()}
      </Typography>
    </Paper>
  ));
}

export default Chat;
