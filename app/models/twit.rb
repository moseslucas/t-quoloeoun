class Twit < ApplicationRecord
  validates :user_id, :content, presence: true
  validates :content, length:{maximum: 120}
  belongs_to :user

  def self.my_twits(id)
    #replace 1 with params[:id]
    Twit.select(:content).joins(:user).where(users:{id: id})
  end


end
