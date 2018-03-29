function noOptionsAvailable(row){
    let done = true;

    row.forEach(cell => {
        if (cell !== 0){
            done=false;
        }
    })

    return done;
}

export function shortestPath(nodes, startMatrix){
    let matrix = startMatrix();
    let shortestPath = [],
        shortestDistance;

    nodes.forEach((node, index)=>{
        matrix       = startMatrix();
        let order    = [],
            distance = 0;

        addOption(0, index);
        addNextNode(0, index);

        /* add the next node to the list */
        function addNextNode(option, index){
            /* if node has nowhere to go check and go back */
            if(noOptionsAvailable(matrix[index])){
                /* add and reset */
                updateShortest(order, distance);
                goBackNode(option, index);
            } else {
                /* for each node linked add and check the next node */
                matrix[index].forEach((option, index)=>{
                    if (option != 0){
                        addOption(option, index);
                        addNextNode(option, index);
                    } 
                });
                /* when cycle finished for node, go back to the previous node */
                goBackNode(option, index);
            }
        } 

        function addNode(option, index){
            addOption(option, index).then(()=> addNextNode(option, index));
        }

        /* add to current path and distance */
        function addOption(option, index) {
            matrix.forEach(row => row[index] = 0);
            order.push(nodes[index]);
            distance += option;
        }

        function goBackNode(option, index) {
            /* add back last row to matrix */
            var orig = startMatrix();
            for(let i=0; i<orig.length ; i++){
                matrix[i][index] = orig[i][index];
            }

            /* remove node from order and distance */
            order.splice([order.length-1]);
            distance -= option;
        }

        /* update shortest path */
        function updateShortest(order, distance) {
            if (order.length === matrix.length && (shortestDistance == undefined || distance < shortestDistance)){
                shortestPath     = [...order];
                shortestDistance = distance;
            }
        }

    });

    document.getElementById('result').innerHTML   = shortestPath;
    document.getElementById('distance').innerHTML = shortestDistance;
}


