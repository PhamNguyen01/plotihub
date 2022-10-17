class User < ApplicationRecord
    has_many :properties
    has_many :tenants, through: :properties, source: :tenants
    has_many :payments 
    has_secure_password

    validates :username, presence: true
    validates :password, presence: true

end
