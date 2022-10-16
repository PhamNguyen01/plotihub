class Maintenance < ApplicationRecord
    # belongs_to :tenant
    # belongs_to :property
    validates :status, presence: true
    validates :category, presence: true
    validates :short_summary, presence: true

end
