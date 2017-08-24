module ApplicationHelper

  private
  def naka_login_ba?
    if !user_signed_in?
      redirect_to new_user_session_path
    end
  end
end
