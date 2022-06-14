export const paginate = (array, pageSize, pageNumber) => (
  array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
);

export const getLastPage = (array, pageSize) => Math.ceil(array.length / pageSize);

export const getLastMessage = (chat) => chat.messages.find(m => m.id === chat.lastMessageId);

export const getParticipant = (id, chat) => chat.participants.find(p => p.id === id);

export const phone = (value) => {
  let result = value;

  result = result.replace(/(\d{2})(\d{4})(\d)/, '($1) $2-$3');

  return result;
}
