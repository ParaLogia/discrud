class Api::ServersController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy, :join, :leave]

  def show
    @server = Server.find_by(id: params[:id])
    if @server
      render :show
    else
      render json: ['Server not found'], status: 404
    end
  end

  def index
    if logged_in?
      @servers = current_user.servers
      render :index
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
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = current_user.owned_servers.find_by(id: params[:id])
    unless @server 
      render json: ['Server not found'] , status: 404
      return
    end

    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages
    end
  end

  def destroy
    @server = current_user.owned_servers.find_by(id: params[:id])
    if @server 
      @server.destroy
      render :show
    else
      render json: ['Server not found'], status: 404
    end
  end

  def join
    @server = Server.find_by(invite_token: params[:invite_token])
    
    if @server
      server_membership = ServerMembership.new(
        server_id: @server.id, 
        member_id: current_user.id
      )
      server_membership.save
      render :show
    else
      render json: ['Server not found'], status: 404
    end
  end

  def leave
    @server = current_user.joined_servers.find_by(id: params[:id])

    if @server
      @server.members.delete(current_user)
      render :show
    else
      render json: ['Unable to leave server'], status: 400
    end
  end

  private 

  def server_params
    params.require(:server).permit(:name, :is_private)
  end
end
