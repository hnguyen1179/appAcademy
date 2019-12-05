class Stack
    def initialize
        @stack = []
    end

    def push(element)
        @stack.push(element)
    end

    def pop
        @stack.pop
    end 

    def peek
        @stack
    end 
end

class Queue 
    def initialize
        @queue = []
    end 

    def enqueue(element)
        @queue.push(element)
    end 

    def dequeue
        @queue.shift
    end

    def peek 
        @queue
    end 
end 

class Map
    def initialize
        @map = [] 
    end 

    def key_check?(key)
        @map.each { |element| return true if element.first == key }
        false 
    end 

    def set(key, value)
        if !key_check?(key)
            @map << [key, value]
        else 
            @map.each do |element|
                element[1] = value if element.first == key
            end 
        end 
    end 

    def get(key)
        @map.each { |element| return element if element.first == key }
        nil
    end 

    def delete(key)
        @map.each.with_index do |element, idx| 
            if element.first == key 
                @map.delete_at(idx)
                break 
            end 
        end 
    end 

    def show
        @map 
    end 
end 