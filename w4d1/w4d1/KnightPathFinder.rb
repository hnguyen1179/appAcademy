require_relative 'PolyTreeNode'

class KnightPathFinder
    attr_reader :considered_positions, :root_node
    def self.valid_moves(pos)
        x, y = pos
        valid_positions = []

        if x+2 < 8 
            valid_positions << [x+2, y+1] if y+1 < 8
            valid_positions << [x+2, y-1] if y-1 >= 0
        end 

        if x-2 >= 0 
            valid_positions << [x-2, y+1] if y+1 < 8
            valid_positions << [x-2, y-1] if y-1 >= 0
        end 

        if y+2 < 8
            valid_positions << [x+1, y+2] if x+1 < 8 
            valid_positions << [x-1, y+2] if x-1 >= 0 
        end 

        if y-2 >= 0 
            valid_positions << [x+1, y-2] if x+1 < 8
            valid_positions << [x-1, y-2] if x-1 >= 0 
        end 

        valid_positions
    end 

    def initialize(start)
        @start = start
        @root_node = PolyTreeNode.new(start)
        @considered_positions = [start]
        build_move_tree
    end

    def new_move_positions(pos)
        new_moves = KnightPathFinder.valid_moves(pos).select do |pos| 
            !@considered_positions.include?(pos)
        end
        @considered_positions += new_moves
        new_moves
    end

    def build_move_tree
        queue = [@root_node]
        until queue.empty? 
            shifted = queue.shift
            new_move_positions(shifted.value).each do |new_pos|
                child = PolyTreeNode.new(new_pos)
                child.parent = shifted 
                queue << child

                # Above Code vs Below Code? 
                # PolyTreeNode.new(new_pos).parent = shifted 
                # queue << PolyTreeNode.new(new_pos)
            end 
        end 

    end 

    def find_path(end_pos)
        found = @root_node.bfs(end_pos)
        found.nil? ? [] : trace_path_back(found)
    end

    def trace_path_back(node)
        path = [node.value]

        current = node
        until current.parent.nil? 
            path.unshift(current.parent.value)
            current = current.parent
        end 

        path
    end

end


# knight = KnightPathFinder.new([3,3])

# Prints out all of the considered values when creating move path 
# p knight.considered_positions.length

# Iterate through the created tree in knight and add into empty array all the
# values of the nodes in the tree 

# queue = [knight.root_node]
# empty = []

# until queue.empty? 
#     popped = queue.shift 
#     popped.children.each do |child|
#         empty << child.value 
#         queue << child
#     end 
# end 

# p empty.length

# p KnightPathFinder.valid_moves([3,3])
# kpf = KnightPathFinder.new([0, 0])
# p kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
# p kpf.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]