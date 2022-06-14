import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { getLastMessage } from '../../utils/functions';
import { setCurrentChat } from '../../redux/reducers/configs';

function ChatList({ handleClose }) {
  const dispatch = useDispatch();
  const { currentChat, visibleContent } = useSelector(state => state.configs);

  const handleChat = useCallback(chat => {
    handleClose();
    dispatch(setCurrentChat(chat));
  }, [dispatch, handleClose]);

  return (
    <List>
      {visibleContent.map((chat, index) => (
        <ListItem
          key={`${chat.protocolo}-${index}`}
          className={chat.protocolo === currentChat?.protocolo ? 'active' : ''}
          disablePadding
          sx={{
            borderRadius: 2,
            mx: 1,
            overflow: 'hidden',
            transitionDuration: '250ms',
            width: 'calc(100% - 16px)',
            '&.active': {
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
            },
          }}
        >
          <ListItemButton onClick={() => handleChat(chat)}>
            <Typography
              color={chat.protocolo === currentChat?.protocolo ? 'inherit' : 'text.secondary'}
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
                color: chat.protocolo === currentChat?.protocolo ? 'inherit' : 'text.secondary',
                noWrap: true,
              }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

ChatList.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ChatList;
