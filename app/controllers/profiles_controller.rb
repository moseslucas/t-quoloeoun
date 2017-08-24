class ProfilesController < ApplicationController
  before_action :naka_login_ba?, only: [:index]

  def index
    @twits = Twit.my_twits current_user.id
  end

  def show
    @twits = Twit.my_twits params[:id]
  end

end
