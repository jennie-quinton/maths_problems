import React, {Component} from 'react';

export class TravellingSalesmanInputRender extends Component{
    render(){
        return (
            <div>
                <h3>Solve your own</h3>
                <p>Enter you problem</p>
                <form id="travelling-salesman-input-form" onSubmit={this.props.handleFormSubmit}>
                    <div>
                        <label htmlFor="numberOfNodes">
                            Number of Nodes:
                        </label>
                        <select name="numberOfNodes" onChange={this.props.handleFieldChange}>
                            {this.props.selectOptions}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="nodes">
                            Nodes List (seperated by a comma):
                        </label>
                        <input name="nodes" type="text" onChange={this.props.handleFieldChange}/>
                    </div>
                    <div>
                        <label htmlFor="matrix">Matrix notation of paths</label>
                        <table name="matrix">
                            <tbody>
                                {this.props.matrixTable}
                            </tbody>
                        </table>
                    </div>
                    <input type="submit" value="Solve Problem"/>
                </form>
            </div>
        )
    }
}