// Required Dependencies
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Poster extends Component {
	constructor() {
		super();
	}

	render() {
		console.log(this.props);
		const movieId = this.props.movie.id;
		return (
			<div class="col-sm-3">
	          <h2>{this.props.movie.title}</h2>
	          <Link to={`/movie/${movieId}`}>
	          	<img src={this.props.poster} />
	          </Link>
	          <p>{this.props.movie.overview}</p>
	        </div>
		)
	}
}

export default Poster;