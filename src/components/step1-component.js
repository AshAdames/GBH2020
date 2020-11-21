import React, { Component } from 'react'

export default class Step1 extends Component {
    render() {
        if (this.props.currStep !==1) {
            return null
        }

        return (
            //resource type
            <div className="container-fluid">
                <h1>What Type of Drive Do You Want to Start? </h1>
                <button type="button" class="btn btn-primary btn-lg">Large button</button>
                <button type="button" class="btn btn-secondary btn-lg">Large button</button>
                <button type="button" class="btn btn-primary btn-lg">Large button</button>
            </div>
        );
    }
}