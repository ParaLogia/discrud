
export const fetchChannel = (channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}`
  });
}

export const createChannel = (serverId, channel) => {
  return $.ajax({
    method: 'POST',
    url: `/api/servers/${serverId}/channels`,
    data: { channel }
  });
}

export const updateChannel = (channel) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: { channel }
  });
}

export const deleteChannel = (channelId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/channels/${channelId}`
  });
}