import React, { Component } from 'react';
import { shortestPath } from '../../../helpers/travelling-salesman';
import { TravellingSalesmanRender } from './travellingSalesmanRender';
import { TravellingSalesmanInput } from './travellingSalesmanInput';

export class TravellingSalesman extends Component{
    constructor(props){
        super(props);

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
    

        this.state = shortestPath(nodes, startMatrix);
    }

    render(){
        return (
            <div className="grid">
                <div className="grid__column--6 container">
                    <h3>Travelling Salesman Problem.</h3>
                    <p>Finding the shortest path visiting every node only once. (Not needing to return to the original node).</p>
                    <img src="http://www.scielo.org.za/img/revistas/sajems/v16n1/05f08.jpg" alt="problem to solve"/>
                    
                    <TravellingSalesmanRender 
                        path ={this.state.path} 
                        distance ={this.state.distance} 
                    />
                </div>
                <TravellingSalesmanInput 
                    handleFormSubmit={this.onFormSubmit}
                />
            </div>
        );
    }
}