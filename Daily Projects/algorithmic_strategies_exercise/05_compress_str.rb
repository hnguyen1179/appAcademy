# Write a method, compress_str(str), that accepts a string as an arg.
# The method should return a new str where streaks of consecutive characters are compressed.
# For example "aaabbc" is compressed to "3a2bc".

def compress_str(string)
    output = ""
    counter = 1

    (0..string.length-1).each { |x|
        if string[x] == string[x+1]
            counter += 1
        elsif counter == 1 && string[x] != string[x+1]
            output += string[x]
        else 
            output += counter.to_s + string[x]
            counter = 1 
        end
    }

    output
end

p compress_str("aaabbc")        # => "3a2bc"
p compress_str("xxyyyyzz")      # => "2x4y2z"
p compress_str("qqqqq")         # => "5q"
p compress_str("mississippi")   # => "mi2si2si2pi"
