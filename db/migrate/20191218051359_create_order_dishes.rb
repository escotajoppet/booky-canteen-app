class CreateOrderDishes < ActiveRecord::Migration[5.0]
  def change
    create_table :order_dishes do |t|
      t.references :order
      t.references :dish

      t.timestamps
    end
  end
end
