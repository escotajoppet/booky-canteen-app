class Dish < ApplicationRecord
  has_many :menus,
    through: :menu_dishes
  has_many :menu_dishes

  before_save :convert_price

  def convert_price
    self.price = self.price.to_d
  end
end
