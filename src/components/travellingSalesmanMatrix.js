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
        // let input = <input 
        //     type = "text" 
        //     data-cell = {this.props.cell} 
        //     data-row = {this.props.row}
        //     onChange = {this.props.handleMatrixChange}
        //     disabled = {this.props.cell === this.props.row}
        // />;

        // if(this.props.cell === this.props.row){
        //     input.value = 0;
        //     input.disabled = true;
        // }
        
        return (
            <td>
                <input 
                    type = "text" 
                    data-cell = {this.props.cell} 
                    data-row = {this.props.row}
                    onChange = {this.props.handleMatrixChange}
                    disabled = {this.props.cell === this.props.row}
                />
            </td>
        )
    }
}