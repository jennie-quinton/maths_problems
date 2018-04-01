/**
 * Checks to see if you are at a dead end of if you have further nodes you can visit.
 * 
 * @param {array} row 
 * @returns {boolean} 
 */
function noOptionsAvailable(row){
    let deadEnd = true;

    row.forEach(cell => {
        if (cell !== 0){
            deadEnd = false;
        }
    })

    return deadEnd;
}

/**
 * For given array of nodes and function creating matrix of variables, it displays the shortest path
 * 
 * @param {array} nodes 
 * @param {function} startMatrix 
 * @returns {array}
 */
export function shortestPath(nodes, startMatrix){
    let shortestPath = [],
        shortestDistance,
        matrix   = startMatrix(),
        order    = [],
        distance = 0;

    nodes.forEach((node, index)=>{
        /* initial distance is 0 as we haven't gone anywhere yet */
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
                    if (option !== 0){
                        addOption(option, index);
                        addNextNode(option, index);
                    } 
                });
                /* when cycle finished for node, go back to the previous node */
                goBackNode(option, index);
            }
        } 

        /* add to current path and distance */
        function addOption(option, index) {
            matrix.forEach(row => row[index] = 0);
            order.push(nodes[index]);
            distance += option;
        }

        /* return to previous node to try different paths */
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
            if (order.length === matrix.length && (shortestDistance === undefined || distance < shortestDistance)){
                shortestPath     = [...order];
                shortestDistance = distance;
            }
        }

    });

    return {path : shortestPath.join(', '), distance : shortestDistance};
}


