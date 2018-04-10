import React, {Component} from 'react';
import TravellingSalesmanInputRender from './travellingSalesmanInputRender';
import TravellingSalesmanMatrix from './travellingSalesmanMatrix';
import TravellingSalesmanRender from './travellingSalesmanRender';
import { shortestPath } from '../../../helpers/travelling-salesman';

export default class TravellingSalesmanInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfNodes: 3,
            nodes: [],
            matrix: this.createZeroMatrix(3),
            path: '',
            distance: ''
        }
    }

    handleFieldChange = (e) => {
        let state = {};
        let value = e.target.value;

        /* update the matrix to new length */
        if(e.target.name === 'numberOfNodes'){
            // eslint-disable-next-line
            state.matrix = this.createZeroMatrix(parseInt(value));
        } else if (e.target.name === 'nodes') {
            value = value.split(",");
        }

        state[e.target.name] = value;
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

    handleFormSubmit = (e) => {
        e.preventDefault();

        const nodesArray = this.state.nodes.split(",");
        const result = shortestPath(nodesArray, this.state.matrix);

        this.setState(result);
    }

    handleMatrixChange = (e) => {
        const dataSet = e.target.dataset;
        let newMatrix = this.state.matrix;

        // eslint-disable-next-line
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
                    nodes = {this.state.nodes}
                />
            );
        }

        return (
            <div className="book__page book__page--right container">
                <TravellingSalesmanInputRender
                    handleFormSubmit = {this.handleFormSubmit}
                    handleFieldChange = {this.handleFieldChange}
                    selectOptions = {selectOptions}
                    matrixTable = {matrixTable}
                    nodes = {this.state.nodes}
                />
                <TravellingSalesmanRender
                    path ={this.state.path}
                    distance ={this.state.distance}
                />
            </div>
        )
    }
}
