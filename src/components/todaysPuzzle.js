import React, {Component} from 'react';
import {TravellingSalesman} from "./puzzles/travellingSalesman/travellingSalesman";

export class TodaysPuzzle extends Component{
    render(){
        return (
            <div className="container">
                <h2>Todays Puzzle</h2>
                <TravellingSalesman />
            </div>
        );
    }
}