import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {TravellingSalesman} from './components/travelling-salesman';
 
class Body extends Component{
    render(){
        return (
            <TravellingSalesman />
        );
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));