class TwitsController < ApplicationController
  def create
    twit = Twit.new(
      user_id: current_user.id,
      content: params[:tweet]
    )
	 	if twit.save
	 		render(:json=> {status:"success"}.as_json)
	 	else
			render(:json=> {status:"error", error: twit.errors}.as_json)
	 	end
  end
end
