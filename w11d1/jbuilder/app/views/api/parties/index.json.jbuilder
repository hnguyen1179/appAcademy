json.array! @parties.each do |party|
  json.partial! 'party', party: party
end
