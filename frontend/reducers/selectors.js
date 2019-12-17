
export const selectUser = (state, userId) => {
  return state.entities.users[userId];
}

export const selectAllServers = (state) => {
  return Object.values(state.entities.servers);
}

export const selectServer = (state, serverId) => {
  return state.entities.servers[serverId];
}

export const selectChannelsOfServer = (state, serverId) => {
  const server = state.entities.servers[serverId];
  if (!server || !server.channelIds) return [];

  const channelIds = server.channelIds;
  return channelIds.map(channelId => (
    state.entities.channels[channelId]
  ))
}

export const selectChannel = (state, channelId) => {
  return state.entities.channels[channelId];
}

export const selectMessagesOfChannel = (state, channelId) => {
  const channel =  state.entities.channels[channelId];
  if (!channel || !channel.messageIds) return [];

  const { messageIds } = channel;
  return messageIds.map(messageId => (
    state.entities.messages[messageId]
  ))
}