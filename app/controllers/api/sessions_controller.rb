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
      if User.exists?(email: params[:user][:email])
        render json: ['Password does not match'], status: 400
      else
        render json: ['Email does not exist'], status: 400
      end
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
