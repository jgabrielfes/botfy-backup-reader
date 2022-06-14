import React from 'react';
import { useSelector } from 'react-redux';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Participants() {
  const { currentChat } = useSelector(state => state.configs);

  return (
    <Accordion
      component="section"
      elevation={0}
      disableGutters
      square
      sx={{
        bgcolor: 'transparent',
        color: 'primary.contrastText',
      }}
    >
      <AccordionSummary
        sx={{
          transition: 'box-shadow 500ms',
          '&.Mui-expanded': { boxShadow: 2 },
        }}
        expandIcon={<ExpandMoreIcon sx={{ color: 'primary.contrastText' }} />}
      >
        <Typography my="auto">Participantes</Typography>
        <AvatarGroup
          max={4}
          sx={{
            ml: 'auto',
            mr: 1,
            '& > .MuiAvatar-root': {
              bgcolor: 'primary.dark',
              borderColor: 'transparent',
              borderWidth: 2,
              color: 'primary.contrastText',
              fontSize: 14,
              height: 28,
              width: 28,
            },
          }}
        >
          {currentChat.participants.map(participant => (
            <Avatar
              key={`participant-${participant.id}`}
              alt={participant.name}
              src={participant.imageURL}
            />
          ))}
        </AvatarGroup>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          bgcolor: 'primary.dark',
          maxHeight: 'calc(100vh - 105px)',
          overflow: 'auto',
          px: 2,
          py: 1,
        }}
      >
        {currentChat.participants.map(participant => (
          <Stack
            key={`participant-${participant.id}`}
            direction="row"
            alignItems="center"
            spacing={1}
            my={1}
          >
            <Avatar
              alt={participant.name}
              src={participant.imageURL}
            />
            <Typography variant="h6">
              {participant.name}
            </Typography>
          </Stack>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export default Participants;
