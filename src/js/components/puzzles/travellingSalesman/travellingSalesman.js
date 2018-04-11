import React from 'react';
import TravellingSalesmanInput from './travellingSalesmanInput';
import TravellingSalesmanIntroRender from './travellingSalesmanIntroRender';

export default function TravellingSalesman(){
    return (
        <div className="book">
            <TravellingSalesmanIntroRender/>
            <TravellingSalesmanInput/>
        </div>
    );
}
