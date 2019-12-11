json.servers do
  @servers.each_with_index do |server, idx|
    json.set! server.id do
      json.partial! 'server', server: server
      if idx == 0
        json.memberIds server.member_ids + [server.owner_id]
      end
    end
  end
end

users = @servers.first.members + [@servers.first.owner]

json.users do
  json.partial! 'api/users/index', users: users
end