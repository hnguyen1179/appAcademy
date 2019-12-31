json.array! @gifts.each do |gift|
  json.partial! 'gift', gift: gift
end

