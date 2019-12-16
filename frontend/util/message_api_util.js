
export const createChannelMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels/${message.threadId}/messages`,
    data: { message }
  });
}

export const updateMessage = (message) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/messages/${message.id}`,
    data: { message }
  })
}

export const deleteMessage = (messageId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/messages/${messageId}`
  })
}
