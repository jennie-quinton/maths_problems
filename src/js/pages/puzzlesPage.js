import React from 'react';
import TodaysPuzzle from '../components/puzzles/todaysPuzzle';

export default function PuzzlesPage(){
    return (
        <div>
            <div className="hero">
                <div className="hero__content">
                    <h1>Puzzles</h1>
                </div>
            </div>
            <TodaysPuzzle />
        </div>
    );
}
