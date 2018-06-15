import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		// if we want to use the current "this" inside of any method,
		// 	we need to "bind" the current this, using the bind method
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// EVERY JS event gets the event obj
	handleSubmit(event) {
		event.preventDefault();
		// console.log(event.target);
		const searchTeam = event.target[0].value;
		console.log(searchTeam);
		// this.props.searchFunction(searchTeam);
		console.log(this.props);
		this.props.history.push(`/search/${searchTeam}`);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" />
				<button className="btn btn-primary" type="submit">Search</button>
			</form>
		)
	}
}

export default SearchBar;