class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.datetime :date
      t.integer :payment_number
      t.string :tenant_name
      t.string :item
      t.string :unit_name
      t.string :status
      t.integer :amount_to_pay

    end
  end
end
