import React, { Component } from 'react'

export default class Login extends Component {

	constructor(props) {
		super(props);
		//bind stuff to make it work
		this.usernameChange = this.usernameChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			password: '',
		}
	}

	usernameChange(e) {
		this.setState({
			username: e.target.value
		});
	}

	passwordChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const login = {
			username: this.state.username,
			password: this.state.password
		}

		console.log(login);
	}

	render() {
		return (
			<div>
				<h1>Login</h1>
				<form action="/login" method="get">
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}

}
