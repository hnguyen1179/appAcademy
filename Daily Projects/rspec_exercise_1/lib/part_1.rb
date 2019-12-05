require "byebug"

def average(a, b)
    (a + b) / 2.0
end

def average_array(array)
    array.sum / array.length.to_f
end

def repeat(string, n)
    string * n
end

def yell(string)
    string.upcase! + "!"
end

def alternating_case(sentence)
    sentence.split(" ").map.with_index { |word, i| 
        i.even? ? word.upcase : word.downcase 
    }.join(" ")
end