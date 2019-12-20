class ApplicationController < ActionController::Base
  helper_method :logged_in?, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in!(user)
    session[:session_token] = user.session_token
    @current_user = user
  end

  def log_out!
    current_user.reset_session_token!
    ActionCable.server.remote_connections.where(current_user: current_user).disconnect
    @current_user = nil
    session[:session_token] = nil
  end

  def ensure_logged_in
    unless logged_in?
      render json: { session: ['Invalid session']}, status: 401
    end
  end
end
