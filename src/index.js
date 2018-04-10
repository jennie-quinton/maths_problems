import React from 'react';
import ReactDOM from 'react-dom';
import Header from './js/components/core/header';
import HomePage from './js/components/homePage';
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
