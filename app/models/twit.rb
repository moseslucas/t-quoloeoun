class Twit < ApplicationRecord
  validates :user_id, :content, presence: true
  validates :content, length:{maximum: 120}
  belongs_to :user

  def self.my_twits(id)
    #replace 1 with params[:id]
    Twit.select("users.email, content, twits.created_at").
    joins(:user).where(users:{id: id}).
    order("twits.created_at DESC")
  end


end
