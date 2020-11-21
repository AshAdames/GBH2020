import React, { Component } from 'react';
import '../login.css';

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

			<body>
				<div className="container-fluid">				<h1>Login to Dank here</h1></div>
			<div className="container">

					<form action="/login" method="get">
						<div className="form-row">
    						<div className="form-group col-md-6">
								<label>Name: 
    								<input type="text" name="name" />
  								</label>
									<div className="form-group col-md-6">
										<label>Email: 
    								<input type="text" name="email" />
  										</label>
									</div>


  									<input type="submit" value="Submit" />
										<p> Test</p>

							</div>
						</div>
					</form>
			</div>

				

			
				
	



</body>

		);
	}

}
