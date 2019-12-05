array = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

def sluggish_octopus(array)
    longest = 0 

    i = 0 
    while i < array.length 
        j = i + 1 
        while j < array.length 
            longest = array[j] if array[j].length > array[i].length 
            j += 1 
        end 
        i += 1 
    end 

    longest
end 

def dominant_octopus(array)

end 

def clever_octopus(array)
    array.inject { |acc, x| (x.length > acc.length) ? x : acc }
end 

p clever_octopus(array)