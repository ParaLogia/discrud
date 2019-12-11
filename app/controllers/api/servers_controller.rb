class Api::ServersController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def index
    if logged_in?
      # TEMPORARY -- REPLACE ONCE MEMBERSHIPS ARE MADE
      @servers = Server.all
      render :index
      ################################################
    else
      @servers = Server.all
      render :index
    end
  end

  def create
    @server = current_user.owned_servers.new(server_params)
    if @server.save
      render :show
    else
      render json: @server.errors.messages
    end
  end

  def update
    @server = current_user.owned_servers.find_by(id: params[:id])
    unless @server 
      render json: { server: ['No such server'] }, status: 404
      return
    end

    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.messages
    end
  end

  def destroy
    @server = current_user.owned_servers.find_by(id: params[:id])
    if @server 
      @server.destroy
      render :show
    else
      render json: { server: ['No such server'] }, status: 404
    end
  end

  private 

  def server_params
    params.require(:server).permit(:name, :description, :is_private)
  end
end
