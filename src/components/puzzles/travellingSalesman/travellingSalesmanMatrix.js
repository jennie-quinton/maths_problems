import React, {Component} from 'react';

export class TravellingSalesmanMatrix extends Component{
    render(){
        let cells = [];
        for(let i=0; i <this.props.rows; i++){
            cells.push(
                <TravellingSalesmanMatrixCell 
                    cell = {i} 
                    row = {this.props.row}
                    key = {`cell ${i}`}
                    handleMatrixChange = {this.props.handleMatrixChange}
                    currentRow = {this.props.currentMatrix[this.props.row]}
                />
            );
        }

        return (
            <tr>
                {cells}
            </tr>
        );

    }
}

class TravellingSalesmanMatrixCell extends Component{
    render(){
        return (
            <td>
                <input className = "matrix__input"
                    type = "text" 
                    data-cell = {this.props.cell} 
                    data-row = {this.props.row}
                    onChange = {this.props.handleMatrixChange}
                    value = {this.props.currentRow[this.props.cell]}
                    disabled = {this.props.cell === this.props.row}
                />
            </td>
        )
    }
}