class ProfilesController < ApplicationController
  before_action :naka_login_ba?, only: [:index]

  def index
    redirect_to profile_path current_user.id
  end

end
