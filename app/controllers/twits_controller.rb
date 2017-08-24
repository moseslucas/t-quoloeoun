class TwitsController < ApplicationController
  def create
    twit = Twit.new(
      user_id: current_user.id,
      content: params[:content].strip.titleize
    )
	 	if twit.save
	 		render(:json=> {status:"success"}.as_json)
	 	else
			render(:json=> {status:"error", error: twit.errors}.as_json)
	 	end
  end


  def my_twits
    twits = Twit.my_twits current_user.id
    render json: twits.as_json
  end

  private
end
