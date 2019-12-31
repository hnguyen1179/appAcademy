json.array! @guests.each do |guest|
  json.partial! 'guest', guest: guest
  # json.name guest.name
  # json.age guest.age
  # json.favorite_color guest.favorite_color
end 

