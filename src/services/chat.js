export const getLastMessage = (chat) => chat.messages.find(message => message.id === chat.lastMessageId);
