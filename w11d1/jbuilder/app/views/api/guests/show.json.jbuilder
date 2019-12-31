# json.extract! @guest, :name, :age, :favorite_color
json.partial! 'guest', guest: @guest

json.gifts do 
  @guest.gifts.each do |gift|
    json.extract! gift, :title, :description
  end
end