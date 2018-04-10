import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/components/core/header';
import HomePage from './js/pages/homePage';
import PuzzlesPage from './js/pages/puzzlesPage';
import './index.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function Body(){
    return (
        <Router>
            <div>
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/puzzles" component={PuzzlesPage} />
            </div>
        </Router>
    );
}

ReactDOM.render(<Body/>, document.getElementById('root'));
