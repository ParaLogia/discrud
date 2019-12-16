json.channel do
  json.partial! 'api/channels/channel', channel: @channel
end

json.messages do
  json.partial! 'api/messages/index', messages: @channel.messages
end