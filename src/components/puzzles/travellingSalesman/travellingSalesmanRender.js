import React, {Component} from 'react';

export class TravellingSalesmanRender extends Component{
    render(){
        return (
            <div >
                <p><strong>Path</strong>: {this.props.path}</p>
                <p><strong>Distance</strong>: {this.props.distance}</p>
            </div>
        );
    }
}