import React, {Component} from 'react';

export default class TravellingSalesmanMatrix extends Component{
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
                <th className="matrix__header"> {this.props.nodes[this.props.row]} </th>
                {cells}
            </tr>
        );

    }
}

function TravellingSalesmanMatrixCell(props){
    return (
        <td>
            <input className = "matrix__input"
                type = "text"
                data-cell = {props.cell}
                data-row = {props.row}
                onChange = {props.handleMatrixChange}
                value = {props.currentRow[props.cell]}
                disabled = {props.cell === props.row}
            />
        </td>
    )
}
