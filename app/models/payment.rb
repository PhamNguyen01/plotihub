class Payment < ApplicationRecord
    belongs_to :user
    belongs_to :tenant
    validates :tenant_name, presence: true, uniqueness: true
    validates :paid_amount, presence: true
    validates :date, presence: true
    validates :status, presence: true

end
