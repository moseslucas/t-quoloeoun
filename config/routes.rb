Rails.application.routes.draw do
  devise_for :users
  root 'profiles#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :profiles, only: [:index, :create, :update, :destroy, :show] do
	end

  resources :twits, only: [:create, :update, :destroy, :show] do
		collection do
      get :my_twits
		end
	end

end
