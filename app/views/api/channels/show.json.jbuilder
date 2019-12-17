json.key_format! camelize: :lower

json.channel do
  json.partial! 'api/channels/channel', channel: @channel
  json.extract! @channel, :message_ids
end

json.messages do
  json.partial! 'api/messages/index', messages: @channel.messages
end