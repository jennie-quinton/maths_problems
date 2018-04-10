import React from 'react';

export default function Header(){
    return(
        <div id="header">
            <ul className="navigation">
                <li className="navigation__item">
                    <a className="navigation__button navigation__button--main" href="/">Home</a>
                </li>
                <li className="navigation__item">
                    <a className="navigation__button" href="/puzzles">Puzzles</a>
                </li>
            </ul>
        </div>
    );
}
