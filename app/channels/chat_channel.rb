class ChatChannel < ApplicationCable::Channel
  def subscribed
    @channel = current_user.channels.find_by(id: params[:id])
    reject unless @channel
    stream_for @channel
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
