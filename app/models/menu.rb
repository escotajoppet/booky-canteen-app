class Menu < ApplicationRecord
  has_many :dishes,
    through: :menu_dishes
  has_many :menu_dishes
end
