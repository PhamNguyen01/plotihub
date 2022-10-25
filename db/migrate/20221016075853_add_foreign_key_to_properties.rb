class AddForeignKeyToProperties < ActiveRecord::Migration[7.0]
  def change
    add_column :tenants, :property_id, :integer
    add_column :properties, :user_id, :integer
    add_column :payments, :user_id, :integer
    add_column :payments, :tenant_id, :integer
    add_column :maintenances, :tenant_id, :integer
    add_column :maintenances, :property_id, :integer


    # add_reference :properties, :user, foreign_key: true
    #   add_reference :tenants, :user, foreign_key: true
    #   add_reference :payments, :user, foreign_key: true
    #   add_reference :maintenances, :user, foreign_key: true
    #   add_reference :utilities, :user, foreign_key: true

      # add_reference :properties, :payment, foreign_key: true
      # add_reference :tenants, :property, foreign_key: true
      # add_reference :payments, :property, foreign_key: true
      # add_reference :maintenances, :property, foreign_key: true
      # add_reference :utilities, :property, foreign_key: true

  end
end
