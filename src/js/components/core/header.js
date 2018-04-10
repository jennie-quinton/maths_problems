import React from 'react';
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div id="header">
            <ul className="navigation">
                <li className="navigation__item">
                    <Link className="navigation__button navigation__button--main" to="/">Home</Link>
                </li>
                <li className="navigation__item">
                    <Link className="navigation__button" to="/puzzles">Puzzles</Link>
                </li>
            </ul>
        </div>
    );
}
