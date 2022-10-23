class Property < ApplicationRecord
    belongs_to :user
    has_many :tenants
    has_many :maintenances

    validates :property_name, presence: true, uniqueness: true
    validates :number_of_units, presence: true
    validates :city, presence: true
end
