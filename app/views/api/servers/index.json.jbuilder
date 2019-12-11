json.servers do
  @servers.each do |server|
    json.set! server.id do
      json.partial! 'server', server: server
    end
  end
end

# TEMPORARY -- FIX AFTER ADDING MEMBERSHIPS
users = [@servers.first.owner]

json.users do
  json.partial! 'api/users/index', users: users
end