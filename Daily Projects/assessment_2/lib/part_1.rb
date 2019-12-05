
def my_reject(arr, &prc)
    output = []
    arr.each { |x| output << x if !prc.call(x) }   
    output
end


def my_one?(arr, &prc)
    count = 0
    arr.each do |x|
        count += 1 if prc.call(x)
    end
    count == 1
end

def hash_select(hash, &prc)
    output = {}
    hash.each do |k, v| 
        if prc.call(k, v)
            output[k] = v 
        end 
    end
    output
end


def xor_select(arr, prc1, prc2)
    new_arr = []
    arr.each do |x|
        if !prc1.call(x) && prc2.call(x) || prc1.call(x) && !prc2.call(x)
            new_arr << x
        end
    end
    new_arr
end

def proc_count(val, arr)
    count = 0 
    arr.each { |proc| count += 1 if proc.call(val) }
    count 
end
