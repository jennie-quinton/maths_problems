import React, {Component} from 'react';

export class TravellingSalesmanRender extends Component{
    render(){
        return (
            <div id="travel-salesman-solution" className="container">
                <h2>Travelling Salesman Problem.</h2>
                <p>Finding the shortest path visting every node only once. (Not needing to return to the original node).</p>
                <img src="http://www.scielo.org.za/img/revistas/sajems/v16n1/05f08.jpg" alt="problem to solve"/>
                <p><strong>Path</strong>: {this.props.path}</p>
                <p><strong>Distance</strong>: {this.props.distance}</p>
            </div>
        );
    }
}