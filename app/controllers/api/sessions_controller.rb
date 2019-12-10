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
        render json: {password: ['password does not match.']}, status: 400
      else
        render json: {email: ['email does not exist.']}, status: 400
      end
    end
  end

  def destroy
    if logged_in?
      log_out!
      render json: {}
    else
      render json: {session: ['invalid session.']}, status: 404
    end    
  end
end
