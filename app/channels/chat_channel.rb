class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = current_user.channels.find(params[:id])
    reject unless @channel
    stream_for @channel
  end

  # def speak(data)
  #   message = @channel.messages.new(body: data['message'], author: current_user)
  #   if message.save
  #     messageJSON = render partial: 'api/messages/message', locals: { message: message }
  #     response = { type: 'RECEIVE_MESSAGE', message: messageJSON }
  #     ChatChannel.broadcast_to(@channel, response)
  #   end
  # end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
