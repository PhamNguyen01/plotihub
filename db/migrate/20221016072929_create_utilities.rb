class CreateUtilities < ActiveRecord::Migration[7.0]
  def change
    create_table :utilities do |t|
      t.string :utility_item
      t.datetime :date

    end
  end
end
