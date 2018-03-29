import React, {Component} from 'react';
import {shortestPath} from '../helpers/solve-travelling-salesman';

export class TravellingSalesman extends Component{
    componentDidMount(){
        const nodes = ["1","2","3","4","5","6","7","8"];
    
        const startMatrix = () =>   { 
            return [
                [0,  3,  2,  5,  0,  0,  0,  0],
                [3,  0,  3,  0,  3,  0,  0,  0],
                [2,  3,  0,  2,  5,  3,  7,  0],
                [5,  0,  2,  0,  0,  6,  0,  0],
                [0,  3,  5,  0,  0,  0,  4,  0],
                [0,  0,  3,  6,  0,  0,  0,  1],
                [0,  0,  7,  0,  4,  0,  0,  2],
                [0,  0,  0,  0,  0,  1,  2,  0]
            ];
        }

        shortestPath(nodes, startMatrix);
    }

    render(){
        return (
            <div id="travel-salesman" className="container">
                <h1>Travelling Salesman Problem.</h1>
                <p>Finding the shortest path visting every node only once. (Not needing to return to the original node).</p>
                <img src="http://www.scielo.org.za/img/revistas/sajems/v16n1/05f08.jpg" alt="problem to solve"/>
                <p> Path: <span id="result"></span></p>
                <p> Distance: <span id="distance"></span></p>
            </div>
        );
    }
}