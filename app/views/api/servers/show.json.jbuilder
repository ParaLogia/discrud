json.key_format! camelize: :lower
json.server do
  json.partial! 'server', server: @server
  json.extract! @server, :user_ids, :channel_ids
end

json.users do
  json.partial! 'api/users/index', users: @server.users
end

json.channels do
  json.partial! 'api/channels/index', channels: @server.channels
end