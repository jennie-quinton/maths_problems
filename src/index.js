import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {TravellingSalesman} from './components/travelling-salesman';
import {Header, Footer} from './components/core/index';
import './index.css';
 
class Body extends Component{
    render(){
        return (
            <div id="page">
                <Header />
                <TravellingSalesman />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));