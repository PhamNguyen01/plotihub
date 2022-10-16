Rails.application.routes.draw do
  resources :users
  resources :utilities
  resources :maintenances
  resources :tenants
  resources :payments
  resources :properties
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
