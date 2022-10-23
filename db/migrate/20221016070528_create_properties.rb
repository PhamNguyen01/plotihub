class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      
      t.string :property_name
      t.integer :number_of_units
      t.string :city
      t.integer :water_rate
      t.integer :electricity_rate
      t.integer :mpesa_paybill
    end
  end
end
