Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api,  defaults: {format: :json} do
    resources :users, only: [:create, :show]
    
    resource :session, only: [:create, :destroy]

    resources :servers, only: [:show, :index, :create, :update, :destroy] do
      member do
        delete 'leave'
      end

      collection do
        post 'join'
      end

      resources :channels, only: [:create]
    end

    resources :channels, only: [:show, :update, :destroy] do
      resources :messages, only: [:create]
    end

    resources :messages, only: [:update, :destroy]
  end

  mount ActionCable.server, at: '/cable'
end
