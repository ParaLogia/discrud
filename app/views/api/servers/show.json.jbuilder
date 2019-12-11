json.server do
  json.partial! 'server', server: @server
  json.memberIds @server.member_ids + [@server.owner_id]
end

users = @server.members + [@server.owner]

json.users do
  json.partial! 'api/users/index', users: users
end