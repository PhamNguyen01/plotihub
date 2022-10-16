class CreatePayments < ActiveRecord::Migration[7.0]
  def change
    create_table :payments do |t|
      t.string :tenant_name
      t.integer :paid_amount
      t.datetime :date
      t.string :status
    end
  end
end
