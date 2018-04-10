import React from 'react';

export default function TravellingSalesmanInputRender(props){
    return (
        <div>
            <h3>Solve your own</h3>
            <p>Enter you problem</p>
            <form id="travelling-salesman-input-form" onSubmit={props.handleFormSubmit}>
                <div>
                    <label htmlFor="numberOfNodes">
                        Number of Nodes:
                    </label>
                    <select name="numberOfNodes" onChange={props.handleFieldChange}>
                        {props.selectOptions}
                    </select>
                </div>
                <div>
                    <label htmlFor="nodes">
                        Nodes List (seperated by a comma):
                    </label>
                    <input name="nodes" type="text" onChange={props.handleFieldChange}/>
                </div>
                <div>
                    <label htmlFor="matrix">Matrix notation of paths:</label>
                    <table name="matrix">
                        <thead>
                            <tr>
                                <th className="matrix__header">
                                    <span className="matrix__header--lower-text">From</span>
                                    <span className="matrix__header--upper-text">To</span></th>
                                {props.nodes.map((node, index)=> (<th className="matrix__header" key={index}>{node}</th>))}
                            </tr>
                        </thead> 
                        <tbody>
                            {props.matrixTable}
                        </tbody>
                    </table>
                </div>
                <input type="submit" value="Solve Problem"/>
            </form>
        </div>
    )
}
