import React, {Component} from 'react';
import { TravellingSalesmanInputRender } from './travellingSalesmanInputRender';
import { TravellingSalesmanMatrix } from './travellingSalesmanMatrix';
import { TravellingSalesmanRender } from './travellingSalesmanRender';
import { shortestPath } from '../../../helpers/travelling-salesman';

export class TravellingSalesmanInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfNodes: 3,
            nodes: '',
            matrix: this.createZeroMatrix(3),
            path: '',
            distance: ''
        }

        this.handleFieldChange  = this.handleFieldChange.bind(this);
        this.handleFormSubmit   = this.handleFormSubmit.bind(this);
        this.handleMatrixChange = this.handleMatrixChange.bind(this);
    }

    handleFieldChange(e){
        let state = {};
        const value = e.target.value;
        state[e.target.name] = value;

        /* update the matrix to new length */
        if(e.target.name === 'numberOfNodes'){
            state.matrix = this.createZeroMatrix(parseInt(value));
        }

        this.setState(state);
    }

    createZeroMatrix(rows){
        let matrix = [];

        for( let i=0; i< rows; i++){
            let row = Array(rows).fill(0);
            matrix.push(row);
        }

        return matrix
    }

    handleFormSubmit(e){
        e.preventDefault();

        const matrixFunction = () => {
            return this.state.matrix.slice();
        };
        const nodesArray = this.state.nodes.split(",");
        const result = shortestPath(nodesArray, matrixFunction);

        this.setState(result);
    }

    handleMatrixChange(e){
        const dataSet = e.target.dataset;
        let newMatrix = this.state.matrix;

        newMatrix[dataSet.row][dataSet.cell] = isNaN(parseInt(e.target.value)) ? '' : parseInt(e.target.value);
        this.setState({matrix: newMatrix});
    }

    render(){
        let selectOptions = [],
            matrixTable = [];

        for(let i=3; i <= 20 ; i++){
            selectOptions.push(
                <option key = {`option ${i}`} value = {i}>{i}</option>
            );
        }

        for(let i=0; i < this.state.numberOfNodes; i++){
            matrixTable.push(
                <TravellingSalesmanMatrix 
                    key = {`row ${i}`} 
                    row = {i}
                    rows = {this.state.numberOfNodes}
                    handleMatrixChange = {this.handleMatrixChange}
                    currentMatrix = {this.state.matrix}
                />
            );
        }

        return (
            <div className="grid__column--6 container">
                <TravellingSalesmanInputRender
                    handleFormSubmit = {this.handleFormSubmit}
                    handleFieldChange = {this.handleFieldChange}
                    selectOptions = {selectOptions}
                    matrixTable = {matrixTable}
                />
                <TravellingSalesmanRender 
                    path ={this.state.path} 
                    distance ={this.state.distance} 
                />
            </div>
        )
    }
}