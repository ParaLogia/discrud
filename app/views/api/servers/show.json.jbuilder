json.server do
  json.partial! 'server', server: @server
end

# TEMPORARY -- FIX AFTER ADDING MEMBERSHIPS
users = [@server.owner]

json.users do
  json.partial! 'api/users/index', users: users
end