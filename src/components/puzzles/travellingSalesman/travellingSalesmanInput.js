import React, {Component} from 'react';
import { TravellingSalesmanInputRender } from './travellingSalesmanInputRender';
import { TravellingSalesmanMatrix } from './travellingSalesmanMatrix';

export class TravellingSalesmanInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfNodes: 3,
            nodes: '',
            matrix: new Array(3).fill(new Array(3).fill(0))
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
            let matrix = new Array(parseInt(value)).fill(new Array(parseInt(value)).fill(0))
            state.matrix = matrix;
        }

        this.setState(state);
    }

    handleFormSubmit(e){
        e.preventDefault();
        this.props.handleFormSubmit(this.state.nodes,this.state.matrix)
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
            <TravellingSalesmanInputRender
                handleFormSubmit = {this.handleFormSubmit}
                handleFieldChange = {this.handleFieldChange}
                selectOptions = {selectOptions}
                matrixTable = {matrixTable}
            />
        )
    }
}