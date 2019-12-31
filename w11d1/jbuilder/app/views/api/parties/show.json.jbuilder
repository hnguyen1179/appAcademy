json.partial! 'party', party: @party

json.guests do
  @party.guests.each do |guest| 
    json.extract! guest, :name, :age, :favorite_color, :gift_ids
  end
end