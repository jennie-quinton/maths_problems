import React, {Component} from 'react';
import {TravellingSalesman} from "./travellingSalesman/travellingSalesman";

export class TodaysPuzzle extends Component{
    render(){
        return (
            <div>
                <h2>Todays Puzzle</h2>
                <TravellingSalesman />
            </div>
        );
    }
}