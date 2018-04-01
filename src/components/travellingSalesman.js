import React, { Component } from 'react';
import { shortestPath } from '../helpers/travelling-salesman';
import { TravellingSalesmanRender } from './travellingSalesmanRender';
import { TravellingSalesmanInput } from './travellingSalesmanInput';

export class TravellingSalesman extends Component{
    constructor(props){
        super(props);

        const nodes = ["1","2","3","4","5","6","7","8"];
        const startMatrix =  () => {
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

        this.state = shortestPath(nodes, startMatrix);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(nodes, matrix) { 
        const matrixFunction = () => {
            return matrix;
        };
        const nodesArray = nodes.split(",");
        const result = shortestPath(nodesArray, matrixFunction);

        this.setState(result);
    }

    render(){
        return (
            <div id="travelling-salesman" className="container">
                <TravellingSalesmanRender 
                    path ={this.state.path} 
                    distance ={this.state.distance} 
                />
                <TravellingSalesmanInput 
                    handleFormSubmit={this.onFormSubmit}
                />
            </div>
        );
    }
}