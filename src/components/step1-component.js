import React, { Component } from 'react'

export default class Step1 extends Component {
    render() {
        if (this.props.currStep !==1) {
            return null
        }


        return (
            //resource type
            <div className="container text-center ">
                <h1>What Type of Drive Do You Want to Start? </h1>
                <div class="my-row row-cols-3 ">
                    <div class="col"><button type="button" class="btn btn-primary btn-lg">Food Drive</button></div>
                    <div class="col"><button type="button" class="btn btn-secondary btn-lg">School Drive</button></div>
                    <div class="col"><button type="button" class="btn btn-primary btn-lg">Other Drive</button></div>
                </div>
            </div>
        );
    }
}