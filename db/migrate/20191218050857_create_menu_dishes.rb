class CreateMenuDishes < ActiveRecord::Migration[5.0]
  def change
    create_table :menu_dishes do |t|
      t.references :menu
      t.references :dish

      t.timestamps
    end
  end
end
