class User < ApplicationRecord
    has_many :properties
    has_many :tenants, through: :properties
    validates :username, presence: true
    validates :password_digest, presence: true, uniqueness: true

end
