def range(first, last)
    return [] if first > last 
    return [] if first == last 

    [first] + range(first+1, last)
end 

def recursive_sum(array)
    return 0 if array.length == 0 
    array.pop + recurse_sum(array)
end

def iterative_sum(array)
    array.inject(&:+)
end

def exponent_one(base, n)
    return 1 if n == 0 
    base * exponent_one(base, n-1)
end

def exponent_two(base, n)
    return 1 if n == 0 
    return base if n == 1 

    if n.even? 
        exponent_two(base, n / 2) * exponent_two(base, n / 2)
    else 
        base * (exponent_two(base, (n - 1) / 2) * exponent_two(base, (n - 1) / 2))
    end
end

class Array 
    def deep_dup
        output = []
        self.each do |obj|
            if obj.is_a?(Array)
                output << obj.deep_dup
            else 
                output << obj
            end 
        end
        output
    end 

    def merge_sort

    end 
end

def recursive_fibonnaci(n)
    return [] if n <= 0 
    return [1] if n == 1 
    return [1, 1] if n == 2 
    seq = recursive_fibonnaci(n-1)
    seq << seq[-2] + seq[-1]
    seq
end

def iterative_fibonnaci(n)
    return [1] if n == 1 
    base = [1, 1]
    base << base[-1] + base[-2] until base.length == n 
    base 
end

def bsearch(array, target)
    return nil if array.length == 0 

    idx = array.length / 2 

    if target < array[idx]
        bsearch(array.take(idx), target)
    elsif target == array[idx]
        return idx 
    else
        sub = bsearch(array.drop(idx+1), target)
        sub.nil? ? nil : (idx + 1) + sub
    end
end 

