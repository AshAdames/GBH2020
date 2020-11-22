import React, { Component } from 'react';
import '../login.css';
import axios from 'axios';
export default class Login extends Component {
	constructor(props) {
		super(props);
		//bind stuff to make it work
		this.usernameChange = this.usernameChange.bind(this);
		this.emailChange = this.emailChange.bind(this);
		this.passwordChange = this.passwordChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			username: '',
			password: '',
			email: ''
		}
	}
	usernameChange(e) {
		this.setState({
			username: e.target.value
		});
	}

	emailChange(e) {
		this.setState({
			email: e.target.value
		});
	}


	passwordChange(e) {
		this.setState({
			password: e.target.value
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const user = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
			isLoggedIn: true
		}
		
		axios.post("http://localhost:5000/users/login", user)
			.then(res => console.log(res.data));

		console.log(user);

	}

	render() {
		return (
			
			<div className="container">
				<div className="container-fluid text-center">				
					<h1>Login to Dank here</h1>
				</div>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" placeholder="Name" value={this.state.username} onChange={this.usernameChange}/>
						</div>

					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.emailChange}/>
						</div>

						<div className="form-group">
							<label>Password</label>
							<input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.passwordChange}/>
						</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary" value="submit">Login</button>
					</div>
					<p> Teseykrkwt</p>				
				</form>
			</div>
			
		);
	}

}
