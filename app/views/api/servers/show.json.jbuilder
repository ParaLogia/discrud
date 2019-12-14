json.server do
  json.partial! 'server', server: @server
  json.memberIds @server.user_ids
end

json.users do
  json.partial! 'api/users/index', users: @server.users
end