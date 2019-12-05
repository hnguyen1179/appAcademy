require 'set'

class GraphNode
    attr_reader :value
    attr_accessor :neighbors

    def initialize(value)
        @value = value
        @neighbors = []
    end

    def neighbors=(array)
        @neighbors = array
    end
end

def bfs(starting_node, target_value)
    visited = Set.new()
    queue = [starting_node]

    until queue.empty? 
        shifted = queue.shift
        unless visited.include?(shifted)
            visited.add(shifted)
            return shifted if shifted.value == target_value
            queue += shifted.neighbors
        end 
    end 

    nil
end 

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p bfs(a, "f")

