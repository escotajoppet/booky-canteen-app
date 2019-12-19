Rails.application.routes.draw do
  resources :customers do
    collection do
      get 'login'
      get 'menu-of-the-day', to: 'customers#menu_of_the_day'
      get 'menu-of-yesterday', to: 'customers#menu_of_yesterday'
    end
  end
  resources :users
  resources :orders do
    collection do
      post 'checkout'
      get 'dashboard'
    end

    member do
      get 'summary'
    end
  end
  resources :dishes
  resources :menus
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
