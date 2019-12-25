class Api::MessagesController < ApplicationController
  before_action :ensure_logged_in

  def create
    channel = current_user.channels.find_by(id: params[:channel_id])
    if channel
      @message = channel.messages.new(message_params)
      @message.author = current_user

      if @message.save
        messageJSON = render :show
        response = { type: 'RECEIVE_NEW_MESSAGE', message: messageJSON }
        ChatChannel.broadcast_to(channel, response)
      else
        render json: @message.errors.full_messages, status: 422
      end
    else
      render json: ['Channel not found'], status: 404
    end
  end

  def update
    @message = current_user.messages.find_by(id: params[:id])
    if @message
      if @message.update(message_params)
        messageJSON = render :show
        response = { type: 'RECEIVE_MESSAGE', message: messageJSON }
        ChatChannel.broadcast_to(@message.thread, response)
      else
        render json: @message.errors.full_messages, status: 422
      end
    else
      render json: ['Message not found'], status: 404
    end
  end

  def destroy
    @message = current_user.messages.find_by(id: params[:id])
    @message ||= current_user.owned_channel_messages.find_by(id: params[:id])
    if @message
      @message.destroy
      messageJSON = render :show
      response = { type: 'REMOVE_MESSAGE', message: messageJSON }
      ChatChannel.broadcast_to(@message.thread, response)
    else
      render json: ['Message not found'], status: 404
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
