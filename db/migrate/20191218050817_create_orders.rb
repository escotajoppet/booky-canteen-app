class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.references :customer, foreign_key: true
      t.integer :quantity
      t.decimal :price, precision: 10, scale: 2
      t.string :time

      t.timestamps
    end
  end
end
