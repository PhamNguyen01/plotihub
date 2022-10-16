class CreateMaintenances < ActiveRecord::Migration[7.0]
  def change
    create_table :maintenances do |t|
      t.string :status
      t.string :category
      t.string :short_summary
      t.string :description
    end
  end
end
