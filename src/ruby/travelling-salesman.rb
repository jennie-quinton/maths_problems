class TravellingSalesman 
    def initialize(nodes, startMatrix)
        @nodes = nodes
        @startMatrix = startMatrix
        @shortestPath = []
        @shortestDistance
        @order = []
        @matrix = createStartMatrix
        @distance = 0
    end

    ##
    # shortest path function
    # need to fix matrix override
    public
    def shortestPath 
        for node in @nodes
            addOption(0, node)
            addNextNode(0, node)
        end

        return {
            distance: @shortestDistance,
            path: @shortestPath.join(", ")
        }
    end

    # add option to current order and distance
    private
    def addOption(distance, node)
        nodeIndex = @nodes.index(node)
        for row in @matrix 
            row[nodeIndex] = 0
        end

        @order << node
        @distance += distance
    end

    # goes to next node to add to route
    private
    def addNextNode(distance, node)
        nodeIndex = @nodes.index(node)

        if (noOptionsAvailable(@matrix[nodeIndex]))
            updateShortest
            goBackNode(distance, node)
        else
            for option in @matrix[nodeIndex]
                nextNodeIndex = @matrix[nodeIndex].index(option)
                nextNode = @nodes[nextNodeIndex]
                if (option != 0)
                    addOption(option, nextNode)
                    addNextNode(option, nextNode)
                end
            end

            goBackNode(distance, node)
        end
    end

    # check to see if at a dead end
    private
    def noOptionsAvailable(row)
        deadEnd = true
        for cell in row
            if( cell != 0)
                deadEnd = false
            end
        end

        return deadEnd
    end

    # go back to previous node to go down other paths from that node
    private
    def goBackNode(distance, node)
        original  = createStartMatrix
        nodeIndex = @nodes.index(node)

        i=0
        while i < original.length
            @matrix[i][nodeIndex] = original[i][nodeIndex]
            i += 1
        end

        @order -= [node]
        @distance -= distance
    end
    
    ##
    # if the current order is valid and the distance is shorter
    # update the shortest path and distance
    private
    def updateShortest
        if (@order.length == @startMatrix.length && (@shortestDistance.nil? || @distance < @shortestDistance ))
            @shortestPath = @order.dup
            @shortestDistance = @distance.dup
        end
    end

    ##
    # create immutable start matrix
    private
    def createStartMatrix
        @startMatrix.map{|row| row.dup}
    end

end

# change to matrix
startMatrix = [
        [0,  3,  2,  5,  0,  0,  0,  0],
        [3,  0,  3,  0,  3,  0,  0,  0],
        [2,  3,  0,  2,  5,  3,  7,  0],
        [5,  0,  2,  0,  0,  6,  0,  0],
        [0,  3,  5,  0,  0,  0,  4,  0],
        [0,  0,  3,  6,  0,  0,  0,  1],
        [0,  0,  7,  0,  4,  0,  0,  2],
        [0,  0,  0,  0,  0,  1,  2,  0]
    ]

nodes = ["1","2","3","4","5","6","7","8"]
travellingSalesman = TravellingSalesman.new(nodes, startMatrix)
puts travellingSalesman.shortestPath