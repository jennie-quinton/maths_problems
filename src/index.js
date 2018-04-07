import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {TodaysPuzzle} from './components/puzzles/todaysPuzzle';
import {Header} from './components/core/header';
import {HomePage} from './components/homePage';
import './index.css';
 
class Body extends Component{
    render(){
        return (
            <div className="page">
                <Header />
                <div className="content">
                    <HomePage />
                    <TodaysPuzzle />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));