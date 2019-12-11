
export const fetchServers = () => {
  return $.ajax({
    method: "GET",
    url: '/api/servers/'
  });
}

export const fetchServer = (serverId) => {
  return $.ajax({
    method: "GET",
    url: `/api/servers/${serverId}`
  });
}

export const createServer = (server) => {
  return $.ajax({
    method: "POST",
    url: '/api/servers/',
    data: { server }
  });
}

export const updateServer = (server) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/servers/${server.id}`,
    data: { server }
  });
}

export const deleteServer = (serverId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/servers/${serverId}`
  });
}

export const joinServer = (serverId) => {
  return $.ajax({
    method: "POST",
    url: `/api/servers/${serverId}/join`
  });
}

export const leaveServer = (serverId) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/servers/${serverId}/leave`
  });
}
