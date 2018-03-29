import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {TravellingSalesman} from './components/travelling-salesman';
import {Header} from './components/core/header';
import './index.css';
 
class Body extends Component{
    render(){
        return (
            <div id="page">
                <Header />
                <TravellingSalesman />
            </div>
        );
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));