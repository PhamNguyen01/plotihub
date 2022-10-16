Rails.application.routes.draw do
  resources :users,  only:[:index, :show, :update, :create,  :destroy]
  resources :utilities,  only:[:index, :show, :update, :create, :destroy]
  resources :maintenances,  only:[:index, :show, :update, :create, :destroy]
  resources :tenants,  only:[:index, :show, :update, :create, :destroy]
  resources :payments,  only:[:index, :show, :update, :create, :destroy]
  resources :properties,  only:[:index, :show, :update, :create, :destroy]
end
