import React, { Component } from 'react';
import '../signup.css';

export default class SignUp extends Component {

	constructor(props) {
		super(props);
		//bind stuff to make it work
		this.usernameChange = this.usernameChange.bind(this);
		this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.passwordconfChange = this.passwordconfChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
            username: '',
            email: '',
            password: '',
            passwordconf: ''
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
    
    passwordconfChange(e) {
		this.setState({
			passwordconf: e.target.value
		});
	}

	onSubmit(e) {
        e.preventDefault();
        
        if(this.state.password !== this.state.passwordconf){
            alert("Passwords must match");
        }else{
            const signup = {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                passwordconf: this.state.passwordconf
            }
            console.log(signup);
            
        }

		
	}

	render() {
		return (
				

			<div className="container">
				<div className="container-fluid text-center">				
					<h1>Sign up to Dank here</h1>
				</div>


                <form onSubmit={this.onSubmit}>

				{/*sdfsdf */}


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
							<label>Password confirmation</label>
							<input type="password" className="form-control" placeholder="Password" value={this.state.passwordconf} onChange={this.passwordconfChange}/>
						</div>



					<div className="form-group">
					
						<button type="submit" className="btn btn-primary" value="submit">Sign Up</button>
					
					</div>
									<p> Teseykrkwt</p>

						
					
				</form>
			</div>
			
		);
	}

}
