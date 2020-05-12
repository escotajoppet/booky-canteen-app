class Order < ApplicationRecord
  has_many :dishes,
    through: :order_dishes
  has_many :order_dishes
  belongs_to :customer
end
