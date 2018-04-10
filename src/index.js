import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/core/header';
import HomePage from './components/homePage';
import './index.css';

function Body(){
    return (
        <div className="page">
            <Header />
            <HomePage />
        </div>
    );
}

ReactDOM.render(<Body/>, document.getElementById('root'));
