import React, {Component} from 'react';

export class Header extends Component{
    render() {
        return(
            <div id="header">
                <ul className="navigation">
                    <li className="navigation__item">
                        <a className="navigation__button navigation__button--main" href="/">Home</a>
                    </li>
                </ul>
            </div>
        );
    }
}