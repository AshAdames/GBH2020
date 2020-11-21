import React, { Component } from 'react'
import Step1 from './step1-component'
import Step2 from './step2-component'
import Step3 from './step3-component'
import axios from 'axios'
export default class DriveForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currStep: 1,
            drivename: "",
            //username: "",
            description: "",
            contact: "",
            location: ""
        }

   }

    handleChange = event => {
        console.log("we tried to type");
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("we tried to submit");
        const drive = {
            drivename: this.state.drivename,
            description: this.state.description,
            contact: this.state.contact,
            location: this.state.location
        }
        console.log(drive);
        axios.post("http://localhost:5000/drives/add", drive)
            .then(res => console.log(res.data));

    }

    _next = () => {
        let currStep = this.state.currStep;
        currStep = this.state.currStep >= 2 ? 3 : currStep + 1
        this.setState({
            currStep: currStep
        })
    }

    nextButton() {
        let currStep = this.state.currStep;
        if (currStep < 3) {
            return (
                <button type="button" className="btn btn-primary btn-lg" onClick={this._next}>Next</button>      
            )
        }
    }

    _prev = () => {
        let currStep = this.state.currStep;
        currStep = this.state.currStep >= 1 ? 1 : currStep - 1
        this.setState({
            currStep: currStep
        })
    }

    prevButton() {
        let currStep = this.state.currStep;
        if (currStep !==1) {
            return (
                <button type="button" className="btn btn-primary btn-lg" onClick={this._prev}>Prev</button>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <p>Step {this.state.currStep}</p>

                <form onSubmit={this.handleSubmit}>
                    <Step1
                        currStep={this.state.currStep}
                        handleChange={this.handleChange}
                        //resource type!!!!!!!!
                    />

                    <Step2
                        currStep={this.state.currStep}
                        handleChange={this.handleChange}

                    />

                    <Step3
                        currStep={this.state.currStep}
                        handleChange={this.handleChange}
                        drivename={this.state.drivename}
                        //username={this.state.usename}
                        description={this.state.description}
                        contact={this.state.contact}
                        location={this.state.location}
                    />
                </form>

                {this.prevButton()}
                {this.nextButton()}
                

            </React.Fragment>
        );
    }
}