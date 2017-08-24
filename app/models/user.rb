class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates :email, :encrypted_password, presence: true
  validates :encrypted_password, length: {minimum: 6}
  validates :email, :email_format => { :message => 'Invalid Email Address' }

  has_many :twits


end
