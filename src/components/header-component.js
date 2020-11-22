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
                            <Link to="/signup" className="nav-link"> Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/resources" className="nav-link"> Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/driveform" className="nav-link"> DriveForm</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/driveslist" className="nav-link"> Active Drives</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}