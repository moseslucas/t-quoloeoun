class HomeController < ApplicationController
  before_action :naka_login_ba?, only: :index
  def index
  end

end
