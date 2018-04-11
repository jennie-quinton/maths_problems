import React from 'react';
import TravellingSalesmanSolutionRender from './travellingSalesmanSolutionRender';
import shortestPath from '../../../helpers/travelling-salesman';

export default function TravellingSalesmanIntroRender(props){
    const nodes = ["1","2","3","4","5","6","7","8"];
    const startMatrix = [
        [0,  3,  2,  5,  0,  0,  0,  0],
        [3,  0,  3,  0,  3,  0,  0,  0],
        [2,  3,  0,  2,  5,  3,  7,  0],
        [5,  0,  2,  0,  0,  6,  0,  0],
        [0,  3,  5,  0,  0,  0,  4,  0],
        [0,  0,  3,  6,  0,  0,  0,  1],
        [0,  0,  7,  0,  4,  0,  0,  2],
        [0,  0,  0,  0,  0,  1,  2,  0]
    ];
    const result = shortestPath(nodes, startMatrix);
    
    return (
        <div className="book__page book__page--left container">
            <h3>Travelling Salesman Problem.</h3>
            <p>Finding the shortest path visiting every node only once. (Not needing to return to the original node).</p>
            <img className="image" src="http://www.scielo.org.za/img/revistas/sajems/v16n1/05f08.jpg" alt="problem to solve"/>

            <TravellingSalesmanSolutionRender
                path = {result.path}
                distance ={result.distance}
            />
        </div>
    );
}