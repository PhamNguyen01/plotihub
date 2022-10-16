class User < ApplicationRecord
    has_many :properties
    has_many :tenants, through: :properties
    validates :user_name, presence: true
    validates :password, presence: true, uniqueness: true

end
