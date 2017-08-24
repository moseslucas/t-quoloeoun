class ProfilesController < ApplicationController

  def index
    redirect_to profile_path current_user.id
  end
  
end
