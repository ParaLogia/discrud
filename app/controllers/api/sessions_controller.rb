class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username/password combo'], status: 401
    end
  end

  def destroy
    if logged_in?
      log_out!
      render json: {}
    else
      render json: ['Invalid session'], status: 404
    end    
  end
end
