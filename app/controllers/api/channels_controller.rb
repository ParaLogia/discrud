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
    
  end

  def destroy
    
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description)
  end
end
