class ProfilesController < ApplicationController
  before_action :naka_login_ba?, only: [:index, :show]

  def index
    set_vars current_user.id
  end

  def show
    if "#{params[:id]}" == "#{current_user.id}"
      redirect_to profiles_path
    else
      set_vars params[:id]
    end
  end


  private
    def set_vars(id)
      @twits = Twit.my_twits id
      @total_twits = Twit.my_total_twits id
      @user = User.find id
    end

end
