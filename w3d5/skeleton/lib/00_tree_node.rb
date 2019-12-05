class PolyTreeNode
    attr_accessor :parent, :children, :value

    def initialize(value)
        @value = value
        @parent = nil 
        @children = []
    end 

    def parent=(node)
        if node == nil 
            @parent = nil
        else 
            @parent.children.delete(self) if @parent != nil
            @parent = node 
            node.children << self unless node.children.include?(self)
        end 
    end 
    
    def add_child(child_node)
        child_node.parent = self 
    end

    def remove_child(child_node)
        child_node.parent = nil 
        raise "ERROR" if child_node.parent.nil?
    end

    def dfs(target)
        #DFS uses a STACK in order to recurse to the right target
        return self if self.value == target

        self.children.each do |child|
            result = child.dfs(target)
            return result unless result.nil?
        end 
        nil
    end 

    def bfs(target)
        #BFS uses a QUEUE in order to iterate to the right target
        queue = [self]
        until queue.empty?
            popped = queue.shift
            return popped if popped.value == target
            popped.children.each do |child|
                queue << child 
            end 
        end 
    end 
end

