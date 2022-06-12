import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { getLastMessage } from '../../services/chat';
import { setCurrentChat } from '../../redux/reducers/configs';

function ChatList() {
  const dispatch = useDispatch();
  const { chats, currentChat } = useSelector(state => state.configs);

  return (
    <List>
      {chats.map(chat => (
        <ListItem
          key={chat.protocolo}
          className={chat.protocolo === currentChat ? 'active' : ''}
          disablePadding
          sx={{
            borderRadius: 2,
            mx: 1,
            transitionDuration: '250ms',
            width: 'calc(100% - 16px)',
            '&.active': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            },
          }}
        >
          <ListItemButton onClick={() => dispatch(setCurrentChat(chat.protocolo))}>
            <Typography
              color={chat.protocolo === currentChat ? 'inherit' : 'text.secondary'}
              variant="caption"
              position="absolute"
              right={24}
              top={16}
            >
              {new Date(getLastMessage(chat).createdAt).toLocaleDateString()}
            </Typography>
            <ListItemAvatar>
              <Avatar
                alt={`${chat.contact.name} photo`}
                src={chat.imageURL}
                sx={{ height: 50, mr: 2, width: 50 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={chat.contact.name}
              secondary={getLastMessage(chat).text}
              secondaryTypographyProps={{
                color: chat.protocolo === currentChat ? 'inherit' : 'text.secondary',
                noWrap: true,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default ChatList;
