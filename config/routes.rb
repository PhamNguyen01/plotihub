Rails.application.routes.draw do
  resources :users,  only:[:index, :show, :update, :create]
  resources :utilities
  resources :maintenances
  resources :tenants
  resources :payments
  resources :properties,  only:[:index, :show, :update, :create, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
