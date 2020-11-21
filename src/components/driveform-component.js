import React, { Component } from 'react'
import Step1 from './step1-component'
import Step2 from './step2-component'
import Step3 from './step3-component'
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

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const {buttonValue} = this.state
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