def proper_factors (num)
    (1...num).select {|i| num % i == 0}
end

def aliquot_sum(num)
    proper_factors(num).sum
end

def perfect_number?(num)
    aliquot_sum(num) == num
end

def ideal_numbers(n)
    new_arr = []
    num = 1 
    until new_arr.length == n  
        new_arr << num if perfect_number?(num)
        num += 1 
    end
    new_arr
end 