import React, { useState, useContext } from 'react';
import '../login.css';
import axios from 'axios';
import { UserContext } from '../userContext';
export function Login(){
	const { userName, setUser } = useContext(UserContext);

	const [username, setUsername,] = useState("");
	const [password, setPassword] = useState("");
	
	function onSubmit(e){
		e.preventDefault();
		setUser(username)
		const user = {
			username: username,
			password: password,
			isLoggedIn: true,
		}
		
		axios.post("http://localhost:5000/users/login", user)
			.then(res => console.log(res.data));
		console.log({ userName });
		window.location ="/driveform"

	}

	return (
		<div className="container">
			<div className="container-fluid text-center">				
				<h1>Login to Dank here</h1>
			</div>
			<form onSubmit={onSubmit} >
				<div className="form-group">
				<label>Name</label>
					<input type="text" className="form-control" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-primary" value="submit">Login</button>
				</div>				
			</form>
		</div>
	);

}
