import React from 'react';

export default function TravellingSalesmanRender(){
    return (
        <div >
            <p><strong>Path</strong>: {this.props.path}</p>
            <p><strong>Distance</strong>: {this.props.distance}</p>
        </div>
    );
}
