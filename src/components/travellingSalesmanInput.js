import React, {Component} from 'react';
import { TravellingSalesmanInputRender } from './travellingSalesmanInputRender';
import { TravellingSalesmanMatrix } from './travellingSalesmanMatrix';

export class TravellingSalesmanInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            numberOfNodes: 3,
            nodes: '',
            matrix: []
        }

        this.handleFieldChange  = this.handleFieldChange.bind(this);
        this.handleFormSubmit   = this.handleFormSubmit.bind(this);
        this.handleMatrixChange = this.handleMatrixChange.bind(this);
    }

    handleFieldChange(e){
        let state = {};
        state[e.target.name] = e.target.value;

        this.setState(state);
    }

    handleFormSubmit(e){
        e.preventDefault();
        this.props.handleFormSubmit(this.state.nodes,this.state.matrix)
    }

    handleMatrixChange(e){
        const dataSet = e.target.dataset;
        let newMatrix = this.state.matrix;
        newMatrix[dataSet.row] = [];
        newMatrix[dataSet.row][dataSet.cell] = parseInt(e.target.value);
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