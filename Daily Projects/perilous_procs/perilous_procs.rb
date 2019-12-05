
require "byebug"
def some?(arr, &prc)
    arr.each {|n| return true if prc.call(n)}
    false
end

def exactly?(arr, num, &prc)
    count = 0 
    arr.each { |x| count += 1 if prc.call(x) }
    count == num
end

def filter_out(arr, &prc)
    new_arr = []
    arr.each {|x| new_arr << x if !prc.call(x)}
    new_arr
end

def at_least?(arr, num, &prc)
    count = 0 
    arr.each { |x| count += 1 if prc.call(x) }
    count >= num
end

def every?(arr, &prc)
    arr.each { |x| return false if !prc.call(x) }
    true 
end

def at_most?(arr, num, &prc)
    count = 0 
    arr.each { |x| count += 1 if prc.call(x) }
    count <= num
end

def first_index(arr, &prc)
    arr.each.with_index { |x, i| return i if prc.call(x) }
    nil
end



#-------------------------------------------

#Phase 2

#-------------------------------------------


def xnor_select(arr, prc1, prc2)
    new_arr = []
    arr.each { |n| new_arr << n if prc1.call(n) && prc2.call(n) || !prc1.call(n) && !prc2.call(n)}
    new_arr
end

#=================================================
# WHY DOES UNIQ AFFECT THIS
def filter_out!(arr, &prc)
    arr.uniq.each {|n| arr.delete(n) if prc.call(n)}
end

#==============================================

def multi_map(arr, n=1, &prc)
    new_arr = []
    arr.each do |x| 
        n.times { 
            x = prc.call(x)
        }
        new_arr << x
    end 
    new_arr
end

def proctition(arr, &prc)
    new_arr = [[], []]
    arr.each do |i|
        if prc.call(i)
            new_arr[0] << i
        else
            new_arr[1] << i
        end
    end
    new_arr.flatten
end



#-----------------------------------

#Phase 3

#-------------------------------------

def selected_map!(arr, prc1, prc2)
    arr.map! do |x| 
        if prc1.call(x)
            prc2.call(x)
        else
            x
        end
    end
    nil
end

def chain_map(num, x)
    arr.each do |x|
        num = x.call(num)
    end
    num
end

def proc_suffix(sentence, hash)
    words = sentence.split(" ")
    og_words = words.dup

    hash.each do |k, v|
        (0...words.length).each { |i| 
            if k.call(og_words[i])
                words[i] += v 
            end
        }
    end
    words.join(" ")
end

def proctition_platinum(arr, *prc)
    # hash = Hash.new { |h, k| h[k] = [] }
    hash = {}
  
    (1..prc.length).each do |i|
        arr.each do |el|
            hash[i] = [] if !hash[i]
            if prc[i-1].call(el) && !hash.values.flatten.include?(el)
                hash[i] << el 
            end
        end
    end
    hash
end

def procipher(sentence, hash)
    words = sentence.split(" ")
    og_words = words.dup

    (0...words.length).each do |i| 
        hash.each do |k, v| 
            if k.call(og_words[i])
                words[i] = v.call(words[i])
            end 
        end
    end 

    words.join(" ")
end

def picky_procipher(sentence, hash)
    words = sentence.split(" ")
    og_words = words.dup

    (0...words.length).each do |i| 
        hash.each do |k, v| 
            if k.call(og_words[i])
                words[i] = v.call(words[i])
                break
            end 
        end
    end 

    words.join(" ")
end
