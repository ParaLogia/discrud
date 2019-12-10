class Api::ServersController < ApplicationController
  def show
    @server = Server.find(params[:id])
    render :show
  end

  def index
    @servers = Server.all
    render :index
  end

  def create
  end

  def update
  end

  def destroy
  end
end
