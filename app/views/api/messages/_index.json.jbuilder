messages.each do |message|
  json.set! message.id do
    json.partial! 'api/message/message', message: message
  end
end