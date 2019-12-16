class Api::ChannelsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def show
    @channel = Channel.find_by(id: params[:id])
    
    if @channel
      render :show
    else
      render json: ['Channel not found'], status: 404
    end
  end

  def create
    server = current_user.owned_servers.find_by(id: params[:server_id])

    if server
      @channel = Channel.new(channel_params)
      @channel.server = server

      if @channel.save
        render :show
      else
        render json: @channel.errors.full_messages
      end
    else
      render json: ['Server not found'], status: 404
    end
  end

  def update
    @channel = current_user.owned_channels.find_by(id: params[:id])

    if @channel
      if @channel.update(channel_params)
        render :show
      else
        render json: @channel.errors.full_messages, status: 422
      end
    else
      render json: ['Channel not found'], status: 404
    end
  end

  def destroy
    @channel = current_user.owned_channels.find_by(id: params[:id])

    if @channel
      @channel.destroy
      render :show
    else
      render json: ['Channel not found'], status: 404
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :topic)
  end
end
