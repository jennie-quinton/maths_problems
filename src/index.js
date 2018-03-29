import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Body extends Component{
    render(){
        return (
            <div id="travel-salesman">
                <h1>Travelling Salesman Problem</h1>
                <img src="http://www.scielo.org.za/img/revistas/sajems/v16n1/05f08.jpg"/>
                <p> Path: <span id="result"></span></p>
                <p> Distance: <span id="distance"></span></p>
            </div>
        );
    }
}

ReactDOM.render(<Body/>, document.getElementById('root'));