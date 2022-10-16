class Property < ApplicationRecord
    # belongs_to :user
    has_many :tenants
    validates :property_name, presence: true, uniqueness: true
    validates :unit_name, presence: true
    validates :number_of_units, presence: true
    validates :city, presence: true
end
