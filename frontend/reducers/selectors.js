
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