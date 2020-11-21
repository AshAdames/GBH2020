import React, { Component } from 'react'

export default class Step2 extends Component {
    render() {
        if (this.props.currStep !== 2) {
            return null
        }

        return (
            //resource type
            <div className="container-fluid">
                <h1>Here are some ideas to help you get started </h1>
                <ul class="list-group">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Morbi leo risus</li>
                    <li class="list-group-item">Porta ac consectetur ac</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>
        );
    }
}