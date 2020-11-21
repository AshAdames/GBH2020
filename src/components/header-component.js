import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/Login" className="nav-link"> Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link"> About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}