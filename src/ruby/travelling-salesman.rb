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
    def shortestPath
        @nodes.each_with_index do |_, nodeIndex|
          addOption(0, nodeIndex)
          addNextNode(0, nodeIndex)
        end

        return {
            distance: @shortestDistance,
            path: @shortestPath.join(", ")
        }
    end

    # add option to current order and distance
    private
    def addOption(distance, index)
        @matrix.each {|row| row[index] = 0}

        @order << @nodes[index]
        @distance += distance
    end

    # goes to next node to add to route
    def addNextNode(distance, index)
        if (noOptionsAvailable(@matrix[index]))
            updateShortest
            goBackNode(distance, index)
        else
            @matrix[index].each_with_index do |option, index|
              if (option != 0)
                  addOption(option, index)
                  addNextNode(option, index)
              end
            end
            goBackNode(distance, index)
        end
    end

    # check to see if at a dead end
    def noOptionsAvailable(row)
        row.none? {|cell| cell != 0}
    end

    # go back to previous node to go down other paths from that node
    def goBackNode(distance, index)
        original  = createStartMatrix
        original.length.times {|i| @matrix[i][index] = original[i][index]}

        @order.pop
        @distance -= distance
    end

    ##
    # if the current order is valid and the distance is shorter
    # update the shortest path and distance
    def updateShortest
        if (@order.length == @startMatrix.length && (@shortestDistance.nil? || @distance < @shortestDistance ))
            @shortestPath = @order.dup
            @shortestDistance = @distance
        end
    end

    ##
    # create immutable start matrix
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
