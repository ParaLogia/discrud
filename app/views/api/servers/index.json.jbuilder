@servers.each do |server|
  json.partial! 'server', server: server
end