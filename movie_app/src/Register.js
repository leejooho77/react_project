import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
	constructor() {
		super();
		this.handleRegister = this.handleRegister.bind(this);
	}

	handleRegister(event) {
		event.preventDefault();
		// axios.get = $.getJSON
		// axios.post = $.ajax({method:post})

		// axios.post(`http://localhost:3030/register`).then((registerData)=>{
		// 	console.log(registerData);
		// });

		// axios is how we make our AJAX requests.
		// in other words, how React talks to Express, Spring

		// const email = event.target[0].value;
		// const password = event.target[1].value;

		const email = document.getElementById('email').value;
		const password = document.getElementById('pwd').value;

		const registerRequest = axios({
			method: "POST",
			url: "http://localhost:3030/register",
			data: {
				email,
				password
			}
		});

		registerRequest.then((registerData)=> {
			console.log(registerData);
			if(registerData.data.msg === "registerSuccess") {
				// localStorage is new cookie.
				// Cookies are inherently insecure. They also can only hold 4k.
				// They are sent in their entirely on EVERY request.
				// localStorage can hold 5mb, the data is NOT sent to the server (unless you tell it to).
				// localStorage is just a HashMap.
				localStorage.setItem('token', registerData.data.token);
				// send user homepage if register success
				this.props.history.push('/');
			} else {
				document.getElementById('message').innerHTML = registerData.data.msg;
			}
		});
	}

	render(){
	    return(
			<form onSubmit={this.handleRegister}>
			  <div className="form-group">
			    <label htmlFor="email">Email address:</label>
			    <input type="email" className="form-control" id="email" />
			  </div>
			  <div className="form-group">
			    <label htmlFor="pwd">Password:</label>
			    <input type="password" className="form-control" id="pwd" />
			  </div>
			  <div className="checkbox">
			    <label><input type="checkbox" /> Remember me</label>
			  </div>
			  <h3 className="text-danger text-center" id="message"></h3>
			  <button type="submit" className="btn btn-default">Register</button>
			</form>
	    ) 
  	}
}

export default Register;