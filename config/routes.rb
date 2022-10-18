Rails.application.routes.draw do
  resources :users
  resources :utilities
  resources :maintenances
  resources :tenants
  resources :payments
  resources :properties

  post '/signup' => 'users#create'
  get '/me' => 'users#show'
  post "/login"  => "sessions#create"
  delete "/logout"  => "sessions#destroy"

end
