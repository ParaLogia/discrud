json.servers({})
json.servers do
  @servers.each_with_index do |server, idx|
    json.set! server.id do
      json.partial! 'server', server: server
      if idx == 0
        json.memberIds server.user_ids
      end
    end
  end
end

json.users({})
json.users do
  users = @servers.first.try(:users) || []
  json.partial! 'api/users/index', users: users
end