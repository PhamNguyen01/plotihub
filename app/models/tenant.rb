class Tenant < ApplicationRecord
    # belongs_to :property
    validates :tenant_name, presence: true, uniqueness: true
    validates :phone_number, presence: true
    validates :deposit, presence: true
    validates :balance, presence: true
    validates :account_number, presence: true

end
