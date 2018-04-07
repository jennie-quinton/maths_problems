import React, {Component} from 'react';
import {TodaysPuzzle} from './puzzles/todaysPuzzle';

export class HomePage extends Component{
    render(){
        return (
            <div>
                <div className="hero">
                    <div className="hero__content">
                        <h1>Maths Logic Problems</h1>
                        <p>
                            The aim of this site it for me to practise my development skills whilst re-learning the maths I was taught during my university days, to make a site full of maths problems to solve or that I have solved.
                        </p>
                        <p>
                            I also aim to include some fun maths games made using javascript.
                        </p>
                    </div>
                </div>
                <div className="content">
                    <TodaysPuzzle />
                </div>
            </div>
        );
    }
}