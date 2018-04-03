import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {TodaysPuzzle} from './components/todaysPuzzle';
import {Header} from './components/core/index';
import {HomePage} from './components/homePage';
import './index.css';
 
class Body extends Component{
    render(){
        return (
            <div id="page">
                <Header />
                <HomePage />
                <TodaysPuzzle />
            </div>
        );
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));