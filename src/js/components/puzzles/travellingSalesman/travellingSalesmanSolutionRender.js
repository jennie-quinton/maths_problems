import React from 'react';

export default function TravellingSalesmanSolutionRender(props){
    return (
        <div >
            <p><strong>Path</strong>: {props.path}</p>
            <p><strong>Distance</strong>: {props.distance}</p>
        </div>
    );
}
