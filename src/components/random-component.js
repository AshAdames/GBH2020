import React, { Component } from 'react';

export default class About extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            username: '',
            test:''
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });

    }

    onSubmit(e) {
        e.preventDefault(); //remove this later
        const information = {
            username: this.state.username,
            test: this.state.test
        }
        console.log(information);
        window.location = "/";
    }

    render() {
        return (
            <div>
                <h3>About Page </h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>username
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label>test
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        
                            <input type="submit" value="Submit" />
                        
                    </div>
                </form>
            </div>
        )
    }
}