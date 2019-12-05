def hipsterfy(word)
    vowelIndex = []
    word.chars.each.with_index { |c, i| vowelIndex << i if "aeiou".include?(c) }
    word.chars.map.with_index { |c, i| i == vowelIndex.max ? "" : c }.join
end

def vowel_counts(string)
    dict = Hash.new(0)
    string.downcase.chars.each { |k, v| dict[k] += 1 if "aeiou".include?(k) }
    dict
end

def caesar_cipher(sentence, n)
    output = ""
    sentence.chars.each { |x| 
        if x.ord >= 97 && x.ord <= 122
            index = x.ord + n 
            if index > 122
                index = (index % 122) + 96
            end
            output += index.chr 
        else 
            output += x 
        end
    }
    output
end 