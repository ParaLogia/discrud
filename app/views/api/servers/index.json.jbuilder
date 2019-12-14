@servers.each do |server|
  json.set! server.id do
    json.partial! 'server', server: server
  end
end