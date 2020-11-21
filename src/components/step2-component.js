import React, { Component } from 'react'

export default class Step2 extends Component {
    render() {
        if (this.props.currStep !== 2) {
            return null
        }

        return (
            //resource type
            <div className="container text-center">
                <h1>Here are some ideas to help you get started </h1>
                <ul className="list-group">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        );
    }
}